const openPop = document.getElementById('open_pop');
const closePop = document.getElementById('close_pop');
const popUp = document.getElementById('pop_up');

openPop.addEventListener('click', (e) => {
    e.preventDefault();

    popUp.classList.add('active');
});

closePop.addEventListener('click', (e) => {
    popUp.classList.remove('active');
});