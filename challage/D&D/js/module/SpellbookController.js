import Spellbook from "./spellbook.js";
import SpellView from "./spellsView.js"
import DashboardView from "./dashboardView.js"
import {clearElement} from "./utilities.js"




export default class SpellbookController{
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.spellbook = new Spellbook();
        this.spellView = new SpellView(parentElement, this.spellbook);
        this.dashboardView = new DashboardView(parentElement, this.spellbook);

      }

  async init() {
    await this.spellbook.getSpellURL()

    await this.dashboardView.buildPage();
    let bnt = document.getElementById("spellViewPage");
    bnt.addEventListener("click", () =>{this.callSpellViewPage();});
  }

  async callSpellViewPage(){
    clearElement(this.parentElement);
    await this.spellView.buildPage();
    let bnt = document.getElementById("dashboardViewPage");
    bnt.addEventListener("click", () => {this.callDashboardViewPage()});
  }


  async callDashboardViewPage(){
    clearElement(this.parentElement);
    await this.dashboardView.buildPage();
    let bnt = document.getElementById("spellViewPage");
    bnt.addEventListener("click", () =>{this.callSpellViewPage();});
  }


}