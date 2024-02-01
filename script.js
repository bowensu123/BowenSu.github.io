document.addEventListener('mousemove', function(e) {
  const flameSize = Math.random() * 10 + 20; // 火焰大小范围

  // 创建火焰核心
  const flameCore = document.createElement('div');
  flameCore.className = 'flame flame-core';
  document.body.appendChild(flameCore);
  flameCore.style.left = `${e.pageX}px`;
  flameCore.style.top = `${e.pageY}px`;
  flameCore.style.width = `${flameSize}px`;
  flameCore.style.height = `${flameSize}px`;

  // 创建火焰外轮廓
  const flameOutline = document.createElement('div');
  flameOutline.className = 'flame flame-outline';
  document.body.appendChild(flameOutline);
  flameOutline.style.left = `${e.pageX}px`;
  flameOutline.style.top = `${e.pageY}px`;
  flameOutline.style.width = `${flameSize * 1.4}px`; // 外轮廓比核心大
  flameOutline.style.height = `${flameSize * 1.4}px`;

  // 设置动态消失
  setTimeout(() => {
    flameCore.remove();
    flameOutline.remove();
  }, 4000); // 动画完成后移除元素
});
