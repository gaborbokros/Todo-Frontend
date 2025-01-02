/* ICON - FONTAWESOME */
import "https://kit.fontawesome.com/f481213ebd.js"

/* PAGES */
import Today from './components/Today.js';
import Important from './components/Important.js';
import Planned from './components/Planned.js';
import NoPage from './components/NoPage.js';

/* ROUTER */
import Router from "./components/Router.js";
const router = new Router();
router
    .addRoute('', Today)
    .addRoute('#today', Today)
    .addRoute('#important', Important)
    .addRoute('#planned', Planned)
    .addRoute('#404', NoPage)
    .routeByHash();