const hamBtnEl = document.querySelector('.ham-btn');
const closeBtnEl = document.getElementById('close-btn');
const sidebarEl = document.getElementById('sidebar');
console.log(hamBtnEl);
console.log(closeBtnEl);

hamBtnEl.addEventListener('click', () => {
    sidebarEl.style.display = 'block';
})

closeBtnEl.addEventListener('click', () => {
    sidebarEl.style.display = 'none';
})