(function(){
  const root = document.documentElement;
  const STORAGE_KEY = 'lba-theme';
  function applyTheme(mode){
    if(mode === 'dark'){
      root.setAttribute('data-fr-theme','dark');
    } else if(mode === 'light'){
      root.setAttribute('data-fr-theme','light');
    } else {
      root.setAttribute('data-fr-theme','');
      root.removeAttribute('data-fr-theme');
    }
    const btn = document.getElementById('theme-toggle');
    if(btn){
      const isDark = root.getAttribute('data-fr-theme') === 'dark';
      btn.setAttribute('aria-pressed', String(isDark));
      btn.textContent = isDark ? 'Mode clair' : 'Mode sombre';
    }
  }
  function init(){
    const saved = localStorage.getItem(STORAGE_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(initial);
    const btn = document.getElementById('theme-toggle');
    if(btn){
      btn.addEventListener('click',()=>{
        const current = root.getAttribute('data-fr-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEY, next);
        applyTheme(next);
      });
    }
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
