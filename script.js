document.addEventListener('mousemove', function(e) {
  const flame = document.createElement('div');
  flame.className = 'flame';
  document.body.appendChild(flame);

  // 设置火焰的初始位置
  flame.style.left = `${e.pageX}px`;
  flame.style.top = `${e.pageY}px`;

  // 随机调整火焰大小
  const size = Math.random() * 10 + 10; // 10px到20px之间
  flame.style.width = `${size}px`;
  flame.style.height = `${size}px`;

  // 让火焰消失
  setTimeout(() => {
    flame.style.opacity = '0';
    setTimeout(() => flame.remove(), 500); // 确保火焰完全透明后再移除
  }, 1000);
});
