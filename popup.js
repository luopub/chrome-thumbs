document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer = document.getElementById('tabs-container');
  const loading = document.getElementById('loading');
  const sortToggle = document.getElementById('sort-toggle');
  const searchInput = document.getElementById('search-input');
  let allTabs = []; // Store all tab data
  let currentFocusedIndex = -1; // Current focused thumbnail index
  let focusInThumbnails = false; // Whether focus is on thumbnails
  
  // Get sort state from storage, default is false (not sorted)
  chrome.storage.sync.get(['sortTabs'], function(result) {
    const isSorting = result.sortTabs !== undefined ? result.sortTabs : false;
    updateSortButton(isSorting);
    loadTabs(isSorting);
  });
  
  // Sort toggle button click event
  sortToggle.addEventListener('click', function() {
    chrome.storage.sync.get(['sortTabs'], function(result) {
      const isSorting = result.sortTabs !== undefined ? result.sortTabs : false;
      const newSortingState = !isSorting;
      
      // Save new sort state
      chrome.storage.sync.set({ sortTabs: newSortingState });
      updateSortButton(newSortingState);
      loadTabs(newSortingState);
    });
  });
  
  // Search box input event
  searchInput.addEventListener('input', function() {
    filterTabs();
    focusInThumbnails = false; // Focus returns to search box when typing
  });
  
  // Keyboard event handling
  document.addEventListener('keydown', function(e) {
    // Handle Escape key, return to search box from anywhere
    if (e.key === 'Escape') {
      searchInput.focus();
      clearThumbnailFocus();
      focusInThumbnails = false;
    }
    // Handle Enter key when focus is on search box
    else if (e.key === 'Enter' && document.activeElement === searchInput) {
      e.preventDefault();
      if (!focusInThumbnails) {
        // Focus on search box, select first thumbnail but don't navigate
        selectFirstThumbnail();
        // Move focus to the first thumbnail
        const tabItems = document.querySelectorAll('.tab-item');
        if (tabItems.length > 0) {
          tabItems[0].focus();
        }
      }
    }
  });
  
  // Filter tabs
  function filterTabs() {
    const searchQuery = searchInput.value.toLowerCase().trim();
    
    if (searchQuery === '') {
      // If search box is empty, show all tabs
      renderTabs(allTabs);
      return;
    }
    
    // Filter tabs
    const filteredTabs = allTabs.filter(tab => {
      return tab.title.toLowerCase().includes(searchQuery) || 
             tab.url.toLowerCase().includes(searchQuery);
    });
    
    renderTabs(filteredTabs);
    // Clear focus after filtering
    clearThumbnailFocus();
  }
  
  // Update sort button display state
  function updateSortButton(isSorting) {
    if (isSorting) {
      sortToggle.textContent = 'Sorted';
      sortToggle.classList.remove('inactive');
    } else {
      sortToggle.textContent = 'Unsorted';
      sortToggle.classList.add('inactive');
    }
  }
  
  // Load tabs
  function loadTabs(shouldSort) {
    tabsContainer.innerHTML = '';
    loading.style.display = 'block';
    tabsContainer.style.display = 'none';
    
    // Get all tabs
    chrome.tabs.query({}, function(tabs) {
      loading.style.display = 'none';
      tabsContainer.style.display = 'grid';
      
      if (tabs.length === 0) {
        tabsContainer.innerHTML = '<div class="loading">No open tabs</div>';
        return;
      }
      
      // If sorting is needed, sort by URL
      allTabs = shouldSort ? [...tabs].sort((a, b) => {
        return a.url.localeCompare(b.url);
      }) : tabs;
      
      // If search box has content, apply filter
      const searchQuery = searchInput.value.toLowerCase().trim();
      if (searchQuery !== '') {
        const filteredTabs = allTabs.filter(tab => {
          return tab.title.toLowerCase().includes(searchQuery) || 
                 tab.url.toLowerCase().includes(searchQuery);
        });
        renderTabs(filteredTabs);
      } else {
        renderTabs(allTabs);
      }
    });
  }
  
  // Render tabs
  function renderTabs(tabs) {
    tabsContainer.innerHTML = '';
    
    if (tabs.length === 0) {
      tabsContainer.innerHTML = '<div class="loading">No matching tabs found</div>';
      return;
    }
    
    // Get current active tab ID
    chrome.tabs.query({active: true, currentWindow: true}, function(activeTabs) {
      const activeTabId = activeTabs.length > 0 ? activeTabs[0].id : -1;
      
        // Create thumbnail element for each tab
      tabs.forEach(tab => {
        const tabItem = document.createElement('div');
        tabItem.className = 'tab-item';
        tabItem.tabIndex = -1; // Make element focusable but not in tab order
        if (tab.id === activeTabId) {
          tabItem.classList.add('active');
        }
        
        const thumbnail = document.createElement('div');
        thumbnail.className = 'tab-thumbnail';
        
        const title = document.createElement('div');
        title.className = 'tab-title';
        title.textContent = tab.title || 'No title';
        title.title = tab.title || 'No title';
        
        // Create thumbnail display area
        const img = document.createElement('img');
        img.src = tab.favIconUrl || '';
        img.style.width = '32px';
        img.style.height = '32px';
        img.style.objectFit = 'contain';
        
        img.onerror = function() {
          this.style.display = 'none';
        };
        
        const textDiv = document.createElement('div');
        textDiv.style.display = 'flex';
        textDiv.style.width = '100%';
        textDiv.style.height = '100%';
        textDiv.style.alignItems = 'center';
        textDiv.style.justifyContent = 'center';
        textDiv.style.color = '#666';
        textDiv.style.fontSize = '10px';
        textDiv.style.textAlign = 'center';
        textDiv.style.padding = '5px';
        textDiv.style.boxSizing = 'border-box';
        textDiv.textContent = tab.title || 'No title';
        
        thumbnail.appendChild(img);
        thumbnail.appendChild(textDiv);
        
        // Create close button
        const closeButton = document.createElement('div');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '×';
        closeButton.title = 'Close tab';
        
        // Click close button to close tab
        closeButton.addEventListener('click', function(e) {
          e.stopPropagation(); // Prevent event bubbling, avoid triggering tab switch
          chrome.tabs.remove(tab.id, function() {
            // Reload tab list after closing
            chrome.storage.sync.get(['sortTabs'], function(result) {
              const isSorting = result.sortTabs !== undefined ? result.sortTabs : false;
              loadTabs(isSorting);
            });
          });
        });
        
        tabItem.appendChild(thumbnail);
        tabItem.appendChild(closeButton);
        tabItem.appendChild(title);
        
        // Click thumbnail area (excluding close button) to switch to corresponding tab
        thumbnail.addEventListener('click', function() {
          chrome.tabs.update(tab.id, {active: true});
          // Optionally close popup
          window.close();
        });
        
        // Add keyboard event handling for thumbnails
        tabItem.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') {
            e.preventDefault();
            chrome.tabs.update(tab.id, {active: true});
            window.close();
          } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            focusNextThumbnail();
          } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            focusPreviousThumbnail();
          } else if (e.key === 'Escape') {
            e.preventDefault();
            searchInput.focus();
            clearThumbnailFocus();
            focusInThumbnails = false;
          }
        });
        
        tabsContainer.appendChild(tabItem);
      });
    });
  }
  
  // Focus control functions
  function selectFirstThumbnail() {
    const tabItems = document.querySelectorAll('.tab-item');
    if (tabItems.length > 0) {
      currentFocusedIndex = 0;
      focusInThumbnails = true;
      updateThumbnailFocus();
    }
  }
  
  function focusFirstThumbnail() {
    const tabItems = document.querySelectorAll('.tab-item');
    if (tabItems.length > 0) {
      currentFocusedIndex = 0;
      focusInThumbnails = true;
      updateThumbnailFocus();
    }
  }
  
  function focusNextThumbnail() {
    const tabItems = document.querySelectorAll('.tab-item');
    if (tabItems.length > 0) {
      currentFocusedIndex = (currentFocusedIndex + 1) % tabItems.length;
      updateThumbnailFocus();
      // Move focus to current thumbnail
      tabItems[currentFocusedIndex].focus();
    }
  }
  
  function focusPreviousThumbnail() {
    const tabItems = document.querySelectorAll('.tab-item');
    if (tabItems.length > 0) {
      currentFocusedIndex = (currentFocusedIndex - 1 + tabItems.length) % tabItems.length;
      updateThumbnailFocus();
      // Move focus to current thumbnail
      tabItems[currentFocusedIndex].focus();
    }
  }
  
  function updateThumbnailFocus() {
    const tabItems = document.querySelectorAll('.tab-item');
    // Clear all focus styles
    tabItems.forEach(item => item.classList.remove('focused'));
    
    // Add focus style to current item
    if (currentFocusedIndex >= 0 && currentFocusedIndex < tabItems.length) {
      tabItems[currentFocusedIndex].classList.add('focused');
      // Ensure focused item is visible in view
      tabItems[currentFocusedIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }
  
  function clearThumbnailFocus() {
    const tabItems = document.querySelectorAll('.tab-item');
    tabItems.forEach(item => item.classList.remove('focused'));
    currentFocusedIndex = -1;
    focusInThumbnails = false;
  }
  
  function activateCurrentThumbnail() {
    if (currentFocusedIndex >= 0) {
      const tabItems = document.querySelectorAll('.tab-item');
      const targetTab = tabItems[currentFocusedIndex];
      if (targetTab) {
        // Trigger click event
        const thumbnail = targetTab.querySelector('.tab-thumbnail');
        if (thumbnail) {
          thumbnail.click();
        }
      }
    }
  }
});