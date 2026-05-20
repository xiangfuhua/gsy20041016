// ================================================================
// darkMode.js — 深色模式切换脚本
// 使用 localStorage 记住用户的主题偏好
// 首次访问时跟随系统偏好（prefers-color-scheme）
// ================================================================

(function () {
  'use strict';

  /** 获取当前主题 */
  function getTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }

  /** 设置主题并保存到 localStorage */
  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateIcons(theme);
  }

  /** 切换主题 */
  function toggleTheme() {
    const current = getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
  }

  /** 更新图标状态 */
  function updateIcons(theme) {
    const sunIcon = document.getElementById('sunIcon');
    const moonIcon = document.getElementById('moonIcon');
    if (sunIcon && moonIcon) {
      if (theme === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
      } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
      }
    }
  }

  /** 初始化主题 */
  function initTheme() {
    // 优先使用用户之前保存的偏好
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      setTheme(saved);
      return;
    }
    // 首次访问则跟随系统偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }

  // DOM 加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // 绑定切换按钮
  document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('darkModeToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }
  });

  // 监听系统主题变化（如果用户没有手动设置过）
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });
})();
