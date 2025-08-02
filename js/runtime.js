document.addEventListener('DOMContentLoaded', () => {
  // 记录页面加载时的初始时间
  const startTime = new Date('Sat Aug 02 2025 11:06:49 GMT+0800 (中国标准时间)');
  const displayElement = document.getElementById('runtime-display');

  if (!displayElement) {
    console.error('无法找到显示运行时间的元素。请检查HTML中是否存在 id 为 "runtime-display" 的元素。');
    return;
  }

  function updateRunTime() {
    // 获取当前时间
    const currentTime = new Date();
    // 计算时间差（以毫秒为单位）
    const timeDiff = currentTime.getTime() - startTime.getTime();

    // 将毫秒转换为时、分、秒
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    // 格式化时间，确保是个位数的时、分、秒前有 '0'
    const displayHours = String(hours).padStart(2, '0');
    const displayMinutes = String(minutes % 60).padStart(2, '0');
    const displaySeconds = String(seconds % 60).padStart(2, '0');

    // 更新 HTML 元素的内容
    displayElement.textContent = `${displayHours}h ${displayMinutes}min ${displaySeconds}s`;
  }

  // 每秒更新一次时间
  setInterval(updateRunTime, 1000);
});