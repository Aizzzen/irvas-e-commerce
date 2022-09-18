const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector)

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            // замена всех НЕцифр на пустые строки
            item.value = item.value.replace(/\D/, "")
        })
    })
}

export default checkNumInputs
