import {clearElement, clickSpell} from "./utilities.js"


export default class SpellView {
    constructor(elment ) {
        this.elment = elment;
    }

    async buildPage(item){
       this.spellbook = item.spellbook;
       this.spellbook.urlIndex = 0;
       let main = document.createElement('div');
       let div = document.createElement('div');
       let h1 =  document.createElement('h1');
       let h2 =  document.createElement('h2');
       let homeBnt =  document.createElement('button');
       let nextBnt =  document.createElement('button');
       let prvBnt =  document.createElement('button');

       //building edit form 
       let form = document.createElement('form');
       let label = document.createElement('label');
       let name = document.createElement('input');
       let subBnt =  document.createElement('button');

       label.textContent = "Change Spellbook name"
       subBnt.textContent ="Submit";
       form.setAttribute('onsubmit', "return false;")
       name.setAttribute('type', "text")
       name.setAttribute('value', item.name)

        // creating spell list.
       await this.buildSpellList(div, "next");

       //Add Classes 
       main.classList.add("spellView");
       div.classList.add("spellList");
    
       h1.textContent ="Edit your Spellbook";
       h2.textContent ="Add Spell";
       homeBnt.textContent ="spellbooks";
       nextBnt.textContent ="Next" ;
       prvBnt.textContent ="Previous";
       homeBnt.setAttribute('id', "spellbookView")
       nextBnt.setAttribute('id', "nextBnt")
       prvBnt.setAttribute('id', "prvBnt")

       label.appendChild(name);
       form.appendChild(label);
       form.appendChild(subBnt);

       main.appendChild(h1);
       main.appendChild(form);
       main.appendChild(h2);
       main.appendChild(homeBnt);
       main.appendChild(div);
       main.appendChild(prvBnt);
       main.appendChild(nextBnt);
       clearElement(this.elment); 
       this.elment.appendChild(main);

       //add event lisners. 
       nextBnt.addEventListener("click", () =>{this.buildSpellList(div, "next") });
       prvBnt.addEventListener("click", () => {this.buildSpellList(div, "previous")});
       subBnt.addEventListener("click", () => {
           item.name = name.value;
           alert(`Your name has been updated to ${item.name}`)
       });
    }

    async buildSpellList(element, direction){
        let spells = [];
        if(direction == "next"){
            spells = await this.spellbook.nextSpells();
        }else if(direction == "previous"){
            spells = await this.spellbook.prvSpells();
        }else{
            console.log("error in SpellsView.js on line 43")
        }

        if(spells == null){return;}

        let div = document.createElement('div');

        spells.forEach(async (result) => {
            let spell = document.createElement('div');
            let p = document.createElement('p');
            let addBnt = document.createElement('button');

            spell.classList.add("spells");
            if(this.spellbook.find(result.name) != null){
                addBnt.classList.add("selected");
            }

            //Add link to spell info
            p.textContent = result.name;
            addBnt.textContent = "add";
            addBnt.classList.add("addBnt");
            
            //Adding eventlistners
            addBnt.addEventListener("click", () => {
                this.spellbook.learnSpell(result.url)
                addBnt.classList.add("selected");
            });
            p.addEventListener('click', () => {clickSpell(result.url)});
            
            spell.appendChild(p);
            spell.appendChild(addBnt);
            div.appendChild(spell);
        });
        clearElement(element);
        element.appendChild(div);
    }
}