import {clickSpell, clearElement} from "./utilities.js"

export default class DashboardView {
    constructor(elment) {
        this.elment = elment;
        this.spellbook = null;
    }

    async buildPage(item){
        this.spellbook = item;
        let main = document.createElement('div');
        let div = document.createElement('div');
        let h1 =  document.createElement('h1');
        let h2 =  document.createElement('h2');
        let spellbookView =  document.createElement('button');

        // creating spell list.
        await this.buildSpellKnowList(div);

        //Add Classes 
        main.classList.add("spellView");
        div.classList.add("spellListDash", "spellList");

        spellbookView.setAttribute('id', "spellbookView")
        h2.textContent ="Your Spells";
        spellbookView.textContent ="Spellbooks";
        h1.textContent = `${this.spellbook.name}'s Spellbook` ;
    
        main.appendChild(h1);
        main.appendChild(h2);
        main.appendChild(div);
        main.appendChild(spellbookView);
        clearElement(this.elment);
        this.elment.appendChild(main);

       //add event lisners.
    }

    async buildSpellKnowList(element){
        let spells = this.spellbook.spellbook.knowSpells;
        let div = document.createElement('div');
         
        spells.forEach(async (spellData) => {
            let spell = document.createElement('div');
            let p = document.createElement('p');
            let removeBnt = document.createElement('button');
            spell.classList.add("spellsDash", "spells");

            //Add spell info
            p.textContent = spellData.name;
            removeBnt.textContent = "remove";
            
            //Adding eventlistners
            p.addEventListener('click', () => {clickSpell(spellData.url)});

            removeBnt.addEventListener("click",  () => {
                this.spellbook.spellbook.forgetSpell(spellData.name) 
                clearElement(spell);
            });
            
            spell.appendChild(p);
            spell.appendChild(removeBnt);
            div.appendChild(spell);

        });
        element.appendChild(div);
    }
}