document.getElementById && (document.getElementById('yr') && (document.getElementById('yr').textContent = new Date().getFullYear()));

const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
if(toggle && nav){
  toggle.addEventListener('click', () => {
    const shown = nav.getAttribute('data-visible') === 'true';
    nav.setAttribute('data-visible', !shown);
  });
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e){ 
    e.preventDefault();
    const t = document.querySelector(this.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
