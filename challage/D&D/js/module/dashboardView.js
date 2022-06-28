import {clickSpell, clearElement} from "./utilities.js"

export default class DashboardView {
    constructor(elment, spellbook) {
        this.elment = elment;
        this.spellbook = spellbook;
    }

    async buildPage(){
        let main = document.createElement('div');
        let div = document.createElement('div');
        let h1 =  document.createElement('h1');
        let h2 =  document.createElement('h2');
        let addBnt =  document.createElement('button');
       

      
        // creating spell list.
        await this.buildSpellKnowList(div);

        //Add Classes 
  
        main.classList.add("spellView");
        div.classList.add("spellList");
       
        addBnt.setAttribute('id', "spellViewPage")
        h2.textContent ="Spells";
        h1.textContent ="name Places holder";
        addBnt.textContent ="Spells";
    
        main.appendChild(h1);
        main.appendChild(h2);
        main.appendChild(div);
        main.appendChild(addBnt);
        this.elment.appendChild(main);

       //add event lisners.
       
       
    }

    async buildSpellKnowList(element){
        let spells = this.spellbook.knowSpells;
        let div = document.createElement('div');
         

        spells.forEach(async (spellData) => {
            let spell = document.createElement('div');
            let p = document.createElement('p');
            let removeBnt = document.createElement('button');
            spell.classList.add("spells");

            //Add spell info
            p.textContent = spellData.name;
            removeBnt.textContent = "remove";
            
            //Adding eventlistners
            p.addEventListener('click', () => {clickSpell(spellData.url)});
            removeBnt.addEventListener("click",  () => {
                this.spellbook.forgetSpell(spellData.name) 
                clearElement(spell);
            });
            
            spell.appendChild(p);
            spell.appendChild(removeBnt);
            div.appendChild(spell);

            
        });
        element.appendChild(div);
    }
    

    
}