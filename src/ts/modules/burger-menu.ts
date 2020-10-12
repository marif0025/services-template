interface burgerMenuOptions {
    container: string,
    active: string,
    onClose: Function,
    onOpen: Function,
}

const burgerMenu = (options: burgerMenuOptions) => {
    const selector = options.container;
    const ACTIVE_CLASS = options.active;
    const onClose = options.onClose
    const onOpen = options.onOpen

    const burgerBtn = document.querySelector(`.${selector}`)
    const hamburger = document.createElement('span')
    if (!burgerBtn) { return }
    burgerBtn.append(hamburger)

    burgerBtn.addEventListener('click', e => {
        const target = <HTMLElement>e.target
        if (target === null) { return }
        if (target === burgerBtn || target.closest(`.${selector}`)) {
            if (burgerBtn.classList.contains(ACTIVE_CLASS)) {
                burgerBtn.classList.remove(ACTIVE_CLASS)
                onClose()
            } else {
                burgerBtn.classList.toggle(ACTIVE_CLASS)
                onOpen()
            }
        }
    })
}

export default burgerMenu