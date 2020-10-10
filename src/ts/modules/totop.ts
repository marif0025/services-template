(() => {
    const toTop = document.querySelector('.btt');
    if (!toTop) { return }
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 700) {
            toTop.classList.add('visible');
        }
        else {
            toTop.classList.remove('visible');
        }
    })
})()