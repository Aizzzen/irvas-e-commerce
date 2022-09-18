import checkNumInputs from './checkNumInputs';

const forms = (state) => {
    // все формы страницы
    const form = document.querySelectorAll('form')
    const inputs = document.querySelectorAll('input')

    checkNumInputs('input[name="user_phone"]')

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
            if(item.getAttribute("data-calc") === "end") {
                for (let key in state) {
                    formData.append(key, state[key])
                }
            }

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
