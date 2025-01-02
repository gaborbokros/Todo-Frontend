const mainContainer = document.querySelector("main .tasks")

export default class Planned {
    renderView() {
        mainContainer.innerHTML = `<h2>Planned</h2>`
    }
}