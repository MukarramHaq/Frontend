const hamBtnEl = document.querySelector('.ham-btn');
const closeBtnEl = document.getElementById('close-btn');
const sidebarEl = document.getElementById('sidebar');

console.log(hamBtnEl);

hamBtnEl.addEventListener('click', () => {
    sidebarEl.style.display = 'block';
    console.log('pressed');
})

closeBtnEl.addEventListener('click', () => {
    sidebarEl.style.display = 'none';
})