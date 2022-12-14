const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = "block") => {
    const header = document.querySelector(headerSelector)
    const tab = document.querySelectorAll(tabSelector)
    const content = document.querySelectorAll(contentSelector)

    const hideTabContent = () => {
        content.forEach(item => {
            item.style.display = "none"
        })

        tab.forEach(item => {
            item.classList.remove(activeClass)
        })
    }

    const showTabContent = (i = 0) => {
        content[i].style.display = display
        tab[i].classList.add(activeClass)
    }

    hideTabContent()
    showTabContent()

    // один обработчик на область объединящую табы
    header.addEventListener("click", (e) => {
        const target = e.target
        // проверка на клик на таб
        if(target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            // .class => class
            // перебор табов, на который был клик
            tab.forEach((item, i) => {
                if(target == item || target.parentNode == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
}

export default tabs
