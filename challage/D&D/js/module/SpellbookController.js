import Spellbook from "./spellbook.js";
import SpellView from "./spellsView.js"
import {close} from "./utilities.js"




export default class SpellbookController{
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.spellbook = new Spellbook();
        this.spellView = new SpellView(parentElement, this.spellbook);
      }

  init() {
    this.spellView.buildPage();

}




}