/* ICON - FONTAWESOME */
import "https://kit.fontawesome.com/f481213ebd.js"

/* PAGES */
import Today from './components/Pages/Today.js';
import Important from './components/Pages/Important.js';
import Planned from './components/Pages/Planned.js';
import NoPage from './components/Pages/NoPage.js';

/* ROUTER */
import Router from "./components/Router.js";
Router
    .addRoute('#today', Today)
    .addRoute('#important', Important)
    .addRoute('#planned', Planned)
    .addRoute('#404', NoPage)
    .renderView();