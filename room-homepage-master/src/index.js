const hamBtnEl = document.querySelector('.ham-btn');
const closeBtnEl = document.querySelector('.close-btn');
const sidebarEl = document.querySelector('.sidebar');

hamBtnEl.addEventListener('click', () => {
    sidebarEl.style.display = 'flex';
})

closeBtnEl.addEventListener('click', () => {
    sidebarEl.style.display = 'none';
})