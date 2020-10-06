const toTop = document.querySelector('.btt')!;

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 700) {
        toTop.classList.add('visible');
    }
    else {
        toTop.classList.remove('visible');
    }
})

import tabs from './modules/ui-tabs'

tabs('ui--tab-wrap', 'ui--tab-link', 'ui--tab-content', 'active-tab')