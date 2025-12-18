document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer = document.getElementById('tabs-container');
  const loading = document.getElementById('loading');
  const sortToggle = document.getElementById('sort-toggle');
  
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
    
    // 获取当前活动标签页ID
    chrome.tabs.query({active: true, currentWindow: true}, function(activeTabs) {
      const activeTabId = activeTabs.length > 0 ? activeTabs[0].id : -1;
      
      // 获取所有标签页
      chrome.tabs.query({}, function(tabs) {
        loading.style.display = 'none';
        tabsContainer.style.display = 'grid';
        
        if (tabs.length === 0) {
          tabsContainer.innerHTML = '<div class="loading">没有打开的标签页</div>';
          return;
        }
        
        // 如果需要排序，按 URL 排序
        let sortedTabs = shouldSort ? [...tabs].sort((a, b) => {
          return a.url.localeCompare(b.url);
        }) : tabs;
        
        // 为每个标签页创建缩略图元素
        sortedTabs.forEach(tab => {
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
          thumbnail.innerHTML = `
            <img src="${tab.favIconUrl || ''}" style="width:32px;height:32px;object-fit:contain;" onerror="this.style.display='none';">
            <div style="display:flex; width:100%; height:100%; align-items:center; justify-content:center; color:#666; font-size:10px; text-align:center; padding:5px; box-sizing:border-box;">
              ${tab.title || '无标题'}
            </div>
          `;
          
          tabItem.appendChild(thumbnail);
          tabItem.appendChild(title);
          
          // 点击切换到对应标签页
          tabItem.addEventListener('click', function() {
            chrome.tabs.update(tab.id, {active: true});
            // 可以选择关闭弹窗
            window.close();
          });
          
          tabsContainer.appendChild(tabItem);
        });
      });
    });
  }
});