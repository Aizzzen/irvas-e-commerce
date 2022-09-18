const forms = () => {
    // все формы страницы
    const form = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]')

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            // замена всех НЕцифр на пустые строки
            item.value = item.value.replace(/\D/, "")
        })
    })

    const message = {
        loaading: "Загрузка...",
        success: "Спасибо! Скоро свяжемся",
        failure: "Что-то пошло не так..."
    }

    // innerHTML === textContent
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loaading
        let res = await fetch(url, {
            method: "POST",
            body: data
        })

        return await res.text()
    }

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ""
        })
    }

    form.forEach(item => {
        item.addEventListener("submit", (e) => {
            // без перезагрузки после отправки
            e.preventDefault()

            // создать блок в скрипте
            let statusMessage = document.createElement('div')
            statusMessage.classList.add('status')
            // добавить блок в верстку
            item.appendChild(statusMessage)

            // FormData(*форма из которой хочу вытащить данные)
            const formData = new FormData(item)

            postData('assets/server.php', formData)
                .then(response => {
                    console.log(response)
                    statusMessage.textContent = message.success
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs()
                    setTimeout(() => {
                        statusMessage.remove()
                    }, 5000)
                })
        })
    })

}

export default forms
