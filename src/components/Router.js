export default class Router {
    routes = {};

    constructor() {
        this.checkHashChange()
    }

    addRoute(route, component) {
        this.routes[route] = new component();
        return this;
    }

    checkHashChange() {
        window.addEventListener("hashchange", () => this.routeByHash());
        return this;
    }

    routeByHash() {
        this.location = window.location.hash;
        let route = this.routes[this.location] || this.routes['#404'];
        route.renderView()
        return this;
    }
}