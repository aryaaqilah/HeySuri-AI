function loading() {
    setTimeout(() => {
        window.location = "/mainpage";
    }, 5000);
}

let checkbox = document.querySelector('.check_box');

checkbox.addEventListener('click', (e) => {
    checkbox.disabled = true
})