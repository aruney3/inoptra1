(function(){
 var t=document.querySelector('.menu-toggle'),n=document.querySelector('nav.main');
 if(t){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)})}
 document.querySelectorAll('.nav-item>button').forEach(function(b){b.addEventListener('click',function(){var it=b.parentElement,o=!it.classList.contains('open');it.classList.toggle('open',o);b.setAttribute('aria-expanded',o)})});
 document.addEventListener('keydown',function(e){if(e.key==='Escape')document.querySelectorAll('.nav-item.open').forEach(function(x){x.classList.remove('open')})});
 document.querySelectorAll('.switch button').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.switch button').forEach(function(x){x.setAttribute('aria-selected',x===b)});document.querySelectorAll('.panel').forEach(function(p){p.classList.toggle('on',p.id===b.dataset.p)})})});
})();
