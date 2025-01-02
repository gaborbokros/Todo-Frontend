const mainContainer = document.querySelector("main .tasks")

export default class Today {
    renderView() {
        mainContainer.innerHTML = `<h2>Today</h2>`
    }
}