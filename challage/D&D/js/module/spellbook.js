
import {getJSON, readFromLS, writeToLS} from "./utilities.js"


export default class Spellbook{
    constructor() {
        this.knowSpells = [];
        this.urlIndex = 0;
        this.key = "spellsKnow";
        this.url = "https://www.dnd5eapi.co/api/spells";
        this.spellURL = [];
        this.spellListCount = 15;

        //Cheking LS for knowSpells & adding them if need 
        if (this.knowSpells.length == 0 && localStorage.getItem(this.key) !== null ){
            let ls = JSON.parse(readFromLS(this.key))
            ls.forEach(spell =>{
                this.knowSpells.push(spell);
            });
        }
    };

    async getSpellURL(){
        let data = await getJSON(this.url);
        let results = data.results;
        results.forEach(async spellURL =>{
            this.spellURL.push(spellURL);
        });
    }

    async nextSpells(){
        //Thougths*  
        let holder = this.spellListCount;
        if(this.urlIndex+holder > 319){
            holder = 319-this.urlIndex;
        }
        let spells = [];
        for (let index = 0; index < holder; index++){
            let list = this.spellURL;
            let spell = list[this.urlIndex];
            this.urlIndex += 1;
            //let url = list[this.urlIndex].url;
            //let data = await this.getSpell(url);
            spells.push(spell);
        }
        return spells;
    }
    
    async prvSpells(){
        if(this.urlIndex-(this.spellListCount*2) < 0){
            return null;
        }
        else{
            this.urlIndex -= (this.spellListCount*2);
            let spells = [];

            for (let index = 0; index < this.spellListCount; index++){
                let list = this.spellURL;
                let spell = list[this.urlIndex];
                this.urlIndex += 1;
                spells.push(spell);
            }
            return spells;
        }
    }

    async getSpell(url){ 
        let query = `https://www.dnd5eapi.co${url}`;
        return getJSON(query);
    }

    async learnSpell(url){
        let spell = await this.getSpell(url); 
        let spellName = spell.name;
        if (this.find(spellName) == null){
            this.knowSpells.push(spell);
            writeToLS(this.key, this.knowSpells);
        }
    }

    forgetSpell(spellName){
        let spell1 = this.find(spellName);
        this.knowSpells = this.knowSpells.filter(function(spell2){ return spell2 != spell1; });
        writeToLS(this.key, this.knowSpells);
    }

    find(spellName){
        return this.knowSpells.find(spell => spell.name == spellName);
    }

  

}








