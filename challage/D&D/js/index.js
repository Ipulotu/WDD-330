
import SpellbookController from './module/SpellbookController.js';

let elment = document.querySelector("#content");
const sb = new SpellbookController(elment);
sb.init();
