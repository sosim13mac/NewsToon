const b=document.querySelector('.theme');
const d=localStorage.getItem('newstoon-theme');
if(d==='dark')document.documentElement.dataset.theme='dark';
b?.addEventListener('click',()=>{
  const dark=document.documentElement.dataset.theme==='dark';
  document.documentElement.dataset.theme=dark?'':'dark';
  localStorage.setItem('newstoon-theme',dark?'light':'dark');
});
