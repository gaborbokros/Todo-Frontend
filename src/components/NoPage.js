const mainContainer = document.querySelector("main .tasks")

export default class NoPage {
    renderView() {
        mainContainer.innerHTML = `<h2>404</h2>`
    }
}