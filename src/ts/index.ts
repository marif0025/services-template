import tabs from './modules/ui-tabs'
import burgerMenu from './modules/burger-menu'

import './modules/totop'
import './modules/slider'

tabs({
    wrap: 'ui--tab-wrap',
    link: 'ui--tab-link',
    content: 'ui--tab-content',
    active: 'active-tab',
})

burgerMenu({
    container: 'burger-menu',
    active: 'open-menu',
    onClose: () => {
        document.body.classList.remove('active-menu')
    },
    onOpen: () => {
        document.body.classList.add('active-menu')
    }
})