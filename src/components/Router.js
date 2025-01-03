const tasksContainer = document.querySelector('.tasks');

class Router {
    routes = {};

    constructor() {
        this.checkHashChange()
    }

    addRoute(route, component) {
        this.routes[route] = new component();
        return this;
    }

    checkHashChange() {
        window.addEventListener("hashchange", () => this.renderView());
        return this;
    }

    routeByHash() {
        const location = window.location.hash; 
        if(location === '') return this.routes['#today'];
        return this.routes[location] || this.routes['#404'];
    }

    renderView() {
        const route = this.routeByHash();
        tasksContainer.innerHTML = route.getView();
        return this;
    }
}

export default new Router()