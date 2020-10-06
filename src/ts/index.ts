const toTop = document.querySelector('.btt')!;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 700) {
        toTop.classList.add('visible');
    }
    else {
        toTop.classList.remove('visible');
    }
})