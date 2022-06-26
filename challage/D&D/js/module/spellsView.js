import {clearElement, clickSpell} from "./utilities.js"


export default class SpellView {
    constructor(elment, spellbook) {
        this.elment = elment;
        this.spellbook = spellbook;
    }

    async buildPage(){
       await this.spellbook.getSpellURL()
       let main = document.createElement('div');
       let div = document.createElement('div');
       let h1 =  document.createElement('h1');
       let h2 =  document.createElement('h2');
       let homeBnt =  document.createElement('button');
       let nextBnt =  document.createElement('button');
       let prvBnt =  document.createElement('button');
        // creating spell list.
       await this.buildSpellList(div, "next");


       //Add Classes 
       main.classList.add("spellView");
       div.classList.add("spellList");
       h2.textContent ="Spells";
       h1.textContent ="name Places holder";
       homeBnt.textContent ="Home";
       nextBnt.textContent ="Next" ;
       prvBnt.textContent ="Previous";
       homeBnt.setAttribute('id', "homeBnt")
       nextBnt.setAttribute('id', "nextBnt")
       prvBnt.setAttribute('id', "prvBnt")


       main.appendChild(h1)
       main.appendChild(h2);
       main.appendChild(homeBnt);
       main.appendChild(div);
       main.appendChild(prvBnt);
       main.appendChild(nextBnt);
       this.elment.appendChild(main);

       //add event lisners. 

       nextBnt.addEventListener("click", () =>{this.buildSpellList(div, "next") });
       prvBnt.addEventListener("click", () => {this.buildSpellList(div, "previous")});

        
    }

    async buildSpellList(element, direction){
        let spells = [];
        if(direction == "next"){
            spells = await this.spellbook.nextSpells();
        }
        else if(direction == "previous"){
            spells = await this.spellbook.prvSpells();
        }
        else{
            console.log("error in SpellsView.js on line 43")
        }

        if(spells == null){return;}

        let div = document.createElement('div');

        spells.forEach(async (result) => {
            //let spellData = await this.spellbook.getSpell(result.url);
            let spell = document.createElement('div');
            let p = document.createElement('p');
            let addBnt = document.createElement('button');
            let removeBnt = document.createElement('button');

            spell.classList.add("spells");

            //Add link to spell info

            p.textContent = result.name;
            
            addBnt.textContent = "add";
            addBnt.classList.add("addBnt");
            removeBnt.textContent = "remove";
            removeBnt.classList.add("addBnt");

            //Adding eventlistners
            addBnt.addEventListener("click", this.spellbook.learnSpell, result.url);
            removeBnt.addEventListener("click", this.spellbook, result.name);
            p.addEventListener('click', () => {clickSpell(result.url)});
            
            spell.appendChild(p);
            spell.appendChild(addBnt);
            spell.appendChild(removeBnt);
            div.appendChild(spell);
        });
        clearElement(element);
        element.appendChild(div);
    }
}