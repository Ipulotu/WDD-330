//import Spellbook from "./spellbook.js";
import SpellbooksView from "./spellbooksview.js";
// import SpellView from "./spellsView.js"
// import DashboardView from "./dashboardView.js"
import {clearElement,  writeToLS, readFromLS} from "./utilities.js"




export default class SpellbookController{
    constructor(parentElement) {
        this.parentElement = parentElement;
        this.spellbooksView = new SpellbooksView(parentElement); 

      }

  async init() {
    //await this.spellbook.getSpellURL()

    await this.spellbooksView.buildPage();
    // await this.dashboardView.buildPage();
    // let bnt = document.getElementById("addSpellbook");
    // let input = document.querySelector("input");
    // bnt.addEventListener("click", () =>{this.addSpellbook(input.value);});
  }

  // async callSpellViewPage(){
  //   clearElement(this.parentElement);
  //   await this.spellView.buildPage();
  //   let bnt = document.getElementById("dashboardViewPage");
  //   bnt.addEventListener("click", () => {this.callDashboardViewPage()});
  // }


  // async callDashboardViewPage(){
  //   clearElement(this.parentElement);
  //   await this.dashboardView.buildPage();
  //   let bnt = document.getElementById("spellViewPage");
  //   bnt.addEventListener("click", () =>{this.callSpellViewPage();});
  // }

  // async callSpellbooksViewPage(){
  //   clearElement(this.parentElement);
  //   await this.spellbooksView.buildPage();
  //   let bnt = document.getElementById("addSpellbook");
  //   let input = document.querySelector("input");
  //   bnt.addEventListener("click", () =>{this.addSpellbook(input.value);});
  // }






}