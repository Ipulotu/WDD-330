import SpellbooksView from "./module/spellbooksview.js";

let elment = document.querySelector("#content");
const sb = new SpellbooksView(elment);
sb.buildPage();
