import Spellbook from "./spellbook.js";
import SpellView from "./spellsView.js"
import DashboardView from "./dashboardView.js"
import {clearElement, writeToLS, readFromLS, validateName} from "./utilities.js"

export default class SpellbooksView {
    constructor(elment) {
        this.elment = elment;
        this.spellbooks = [];
        this.spellView = new SpellView(elment);
        this.dashboardView = new DashboardView(elment, this.spellView);

        //Cheking LS for spellbooks & adding them if need 
        if (this.spellbooks.length == 0 && localStorage.getItem("spellbooks") !== null ){
            try{
                let ls = JSON.parse(readFromLS("spellbooks"))
                if(ls.length > 1){
                    ls.forEach(item =>{
                        let spellbook = new Spellbook()
                        spellbook.getSpellURL();
                        spellbook.copy(item.spellbook);
                        let object = {
                            "name":item.name,
                            "spellbook": spellbook
                        };
                        this.spellbooks.push(object);
                    });
                } else {
                    let item = ls[0]
                   
                    let spellbook = new Spellbook()
                    spellbook.getSpellURL();
                    spellbook.copy(item.spellbook);
                    let object = {
                        "name":item.name,
                        "spellbook": spellbook
                    };
                    this.spellbooks.push(object);
                }
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    async buildPage(){
        let main = document.createElement('div');
        let div = document.createElement('div');
        let h1 =  document.createElement('h1');
        let p =  document.createElement('p');
        let inputDiv = document.createElement('div');
        let input = document.createElement('input');
        let addBnt =  document.createElement('button');
       
        // creating spell list.
        await this.buildSpellbookList(div);

        //Add Classes 
        main.classList.add("spellbooksView");
        div.classList.add("spellbookList");
        inputDiv.classList.add("inputDiv");
        addBnt.setAttribute('id', "addSpellbook")
        h1.textContent ="Choose a spellbook";
        p.textContent ="Add a Spellbook"
        addBnt.textContent ="add";
    
        //appending elements
        inputDiv.appendChild(input);
        inputDiv.appendChild(addBnt);
        main.appendChild(h1);
        main.appendChild(div);
        main.appendChild(p);
        main.appendChild(inputDiv);
        clearElement(this.elment);
        this.elment.appendChild(main);

       //add event lisners.
       addBnt.addEventListener("click", () =>{this.addSpellbook(input.value);});
       
    }

    async buildSpellbookList(element){
        let spellbooks = this.spellbooks;
        let div = document.createElement('div');
         

        spellbooks.forEach(async (spellbook) => {
            let book = document.createElement('div');
            let p = document.createElement('p');
            let removeBnt = document.createElement('button');
            let edit = document.createElement('button');
            book.classList.add("spellbooks");


            //Add spell info
            p.textContent = spellbook.name;
            removeBnt.textContent = "remove";
            edit.textContent = "edit";
            
            //Adding eventlistners
            p.addEventListener('click', async () => {
                await this.dashboardView.buildPage(spellbook);
                let bnt = document.getElementById("spellbookView");
                bnt.addEventListener("click", () => {
                    writeToLS("spellbooks", this.spellbooks);
                    this.buildPage()
                });
            });

            edit.addEventListener("click", async  () => {
                await this.spellView.buildPage(spellbook);
                let bnt = document.getElementById("spellbookView");
                bnt.addEventListener("click", () => {
                    writeToLS("spellbooks", this.spellbooks);
                    this.buildPage()
                });
            });
            
            removeBnt.addEventListener("click",  () => {
                this.removeSpellbook(spellbook);
                window.localStorage.removeItem(spellbook.name);
                clearElement(book);
            });

            book.appendChild(p);
            book.appendChild(edit);
            book.appendChild(removeBnt);
            div.appendChild(book);

        });
        element.appendChild(div);
    }
    

    addSpellbook(name){
        name = name.toString()
        if(!validateName(name)){
            return;
        }
        let spellbook = new Spellbook(name);
        let item = {
          "name":name,
          "spellbook": spellbook
        };
        spellbook.getSpellURL();
        
        this.spellbooks.push(item);
        writeToLS("spellbooks", this.spellbooks);
        this.buildPage();
      }


    removeSpellbook(spellbook){
        let spellbook1 = this.spellbooks.find(item => item.name == spellbook.name);
        this.spellbooks = this.spellbooks.filter(function(item){ return item != spellbook1; });
        writeToLS("spellbooks",this.spellbooks);
        this.buildPage();
    }

}