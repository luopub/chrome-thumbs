document.addEventListener('DOMContentLoaded', function() {
  const tabsContainer = document.getElementById('tabs-container');
  const loading = document.getElementById('loading');
  
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
});