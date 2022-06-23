

export default class SpellView {
    constructor(elment, spellbook) {
        this.elment = elment;
        this.spellbook = spellbook;
    }

    buildPage(){
       let div = document.createElement('div');
       let h1 =  document.createElement('h1');
       let backBnt =  document.createElement('button');

       //Add Classes 
       div.classList.add("spellView")

       let spellList = this.buildSpellList();
       
       div.appendChild(h1);
       div.appendChild(backBnt);
       div.appendChild(spellList);
       this.elment.appendChild(div);

       //add event lisners. 
        
    }

    buildSpellList(){
        let div = document.createElement('div');
        let spells = this.spellbook.getAllSpells();

        spells.forEach(result => {
            let spellData = this.spellbook.getSpell(result.url);
            let spell = document.createElement('div');
            let p = document.createElement('p');
            let addBnt = document.createElement('button');
            let removeBnt = document.createElement('button');

            spell.classList.add("spells");

            //Add link to spell info

            p.textContent = spellData.name;
            addBnt.textContent = "add";
            addBnt.classList.add("addBnt");
            removeBnt.textContent = "remove";
            removeBnt.classList.add("addBnt");

            
            spell.appendChild(p);
            spell.appendChild(addBnt);
            spell.appendChild(removeBnt);
            div.appendChild(spell);

            addBnt.addEventListener("click", this.spellbook.learnSpell, result.url);
            removeBnt.addEventListener("click", this.spellbook, );


            // add event lisners. 

        });


        

    }
    


    
    }