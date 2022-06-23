import Spellbook from "./spellbook";
import SpellView from "./spellsView"



export default class SpellbookController{
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.spellbook = new Spellbook();
        this.quakesView = new SpellView(parentElement, spellbook);
      }








}