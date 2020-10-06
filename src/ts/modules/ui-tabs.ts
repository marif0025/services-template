const tabs = (wrap: string, link: string, content: string, active: string) => {
    const WRAP_CLASS: string = wrap
    const LINK_CLASS: string = link
    const CONTENT_CLASS: string = content
    const ACTIVE_CLASS: string = active

    const tabsContainer = document.querySelectorAll(`.${WRAP_CLASS}`)
    if (tabsContainer.length < 1) { return }

    tabsContainer.forEach(container => {
        const tabLinks = container.querySelectorAll(`.${LINK_CLASS}`)
        const tabContent = container.querySelectorAll(`.${CONTENT_CLASS}`)

        tabLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                let href = link.getAttribute('rel')
                let matchingContent = document.querySelector(`#${href}`)!

                tabContent.forEach(tc => {
                    if (tc === matchingContent) { return }
                    tc.classList.remove(ACTIVE_CLASS)
                    tc.classList.remove('show')
                })

                tabLinks.forEach(tl => {
                    if (tl === link) { return }
                    tl.classList.remove(ACTIVE_CLASS)
                })

                link.classList.add(ACTIVE_CLASS)
                matchingContent.classList.add(ACTIVE_CLASS)

                setTimeout(() => {
                    matchingContent.classList.add('show')
                }, 100)
            })
        })
    })
}

export default tabs