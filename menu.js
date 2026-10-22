document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(b => { b.classList.toggle('active',b===button); b.setAttribute('aria-pressed',String(b===button)); });
 document.querySelectorAll('[data-category]').forEach(group => { group.hidden=button.dataset.filter!=='all' && group.dataset.category!==button.dataset.filter; });
}));
