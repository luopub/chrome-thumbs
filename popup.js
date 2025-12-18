document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer = document.getElementById('tabs-container');
  const loading = document.getElementById('loading');
  const sortToggle = document.getElementById('sort-toggle');
  const searchInput = document.getElementById('search-input');
  let allTabs = []; // 存储所有标签页数据
  
  // 从存储中获取排序状态，默认为 false（不排序）
  chrome.storage.sync.get(['sortTabs'], function(result) {
    const isSorting = result.sortTabs !== undefined ? result.sortTabs : false;
    updateSortButton(isSorting);
    loadTabs(isSorting);
  });
  
  // 排序切换按钮点击事件
  sortToggle.addEventListener('click', function() {
    chrome.storage.sync.get(['sortTabs'], function(result) {
      const isSorting = result.sortTabs !== undefined ? result.sortTabs : false;
      const newSortingState = !isSorting;
      
      // 保存新的排序状态
      chrome.storage.sync.set({ sortTabs: newSortingState });
      updateSortButton(newSortingState);
      loadTabs(newSortingState);
    });
  });
  
  // 搜索框输入事件
  searchInput.addEventListener('input', function() {
    filterTabs();
  });
  
  // 过滤标签页
  function filterTabs() {
    const searchQuery = searchInput.value.toLowerCase().trim();
    
    if (searchQuery === '') {
      // 如果搜索框为空，显示所有标签页
      renderTabs(allTabs);
      return;
    }
    
    // 过滤标签页
    const filteredTabs = allTabs.filter(tab => {
      return tab.title.toLowerCase().includes(searchQuery) || 
             tab.url.toLowerCase().includes(searchQuery);
    });
    
    renderTabs(filteredTabs);
  }
  
  // 更新排序按钮的显示状态
  function updateSortButton(isSorting) {
    if (isSorting) {
      sortToggle.textContent = '排序';
      sortToggle.classList.remove('inactive');
    } else {
      sortToggle.textContent = '不排序';
      sortToggle.classList.add('inactive');
    }
  }
  
  // 加载标签页
  function loadTabs(shouldSort) {
    tabsContainer.innerHTML = '';
    loading.style.display = 'block';
    tabsContainer.style.display = 'none';
    
    // 获取所有标签页
    chrome.tabs.query({}, function(tabs) {
      loading.style.display = 'none';
      tabsContainer.style.display = 'grid';
      
      if (tabs.length === 0) {
        tabsContainer.innerHTML = '<div class="loading">没有打开的标签页</div>';
        return;
      }
      
      // 如果需要排序，按 URL 排序
      allTabs = shouldSort ? [...tabs].sort((a, b) => {
        return a.url.localeCompare(b.url);
      }) : tabs;
      
      // 如果搜索框有内容，应用过滤
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
  
  // 渲染标签页
  function renderTabs(tabs) {
    tabsContainer.innerHTML = '';
    
    if (tabs.length === 0) {
      tabsContainer.innerHTML = '<div class="loading">没有找到匹配的标签页</div>';
      return;
    }
    
    // 获取当前活动标签页ID
    chrome.tabs.query({active: true, currentWindow: true}, function(activeTabs) {
      const activeTabId = activeTabs.length > 0 ? activeTabs[0].id : -1;
      
      // 为每个标签页创建缩略图元素
      tabs.forEach(tab => {
        const tabItem = document.createElement('div');
        tabItem.className = 'tab-item';
        if (tab.id === activeTabId) {
          tabItem.classList.add('active');
        }
        
        const thumbnail = document.createElement('div');
        thumbnail.className = 'tab-thumbnail';
        
        const title = document.createElement('div');
        title.className = 'tab-title';
        title.textContent = tab.title || '无标题';
        title.title = tab.title || '无标题';
        
        // 创建缩略图显示区域
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
        textDiv.textContent = tab.title || '无标题';
        
        thumbnail.appendChild(img);
        thumbnail.appendChild(textDiv);
        
        // 创建关闭按钮
        const closeButton = document.createElement('div');
        closeButton.className = 'close-button';
        closeButton.innerHTML = '×';
        closeButton.title = '关闭标签页';
        
        // 点击关闭按钮关闭标签页
        closeButton.addEventListener('click', function(e) {
          e.stopPropagation(); // 阻止事件冒泡，防止触发标签页切换
          chrome.tabs.remove(tab.id, function() {
            // 关闭后重新加载标签页列表
            chrome.storage.sync.get(['sortTabs'], function(result) {
              const isSorting = result.sortTabs !== undefined ? result.sortTabs : false;
              loadTabs(isSorting);
            });
          });
        });
        
        tabItem.appendChild(thumbnail);
        tabItem.appendChild(closeButton);
        tabItem.appendChild(title);
        
        // 点击缩略图区域（不包括关闭按钮）切换到对应标签页
        thumbnail.addEventListener('click', function() {
          chrome.tabs.update(tab.id, {active: true});
          // 可以选择关闭弹窗
          window.close();
        });
        
        tabsContainer.appendChild(tabItem);
      });
    });
  }
});