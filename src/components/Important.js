const mainContainer = document.querySelector("main .tasks")

export default class Important {
    renderView() {
        mainContainer.innerHTML = `<h2>Important</h2>`
    }
}