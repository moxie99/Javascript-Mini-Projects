const container = document.getElementById('container');
const btn = document.getElementById('open');
const btnClose = document.getElementById('close')

btn.addEventListener('click', () => {
    container.classList.add('active');
})

btnClose.addEventListener('click', () => {
    container.classList.remove('active');
})