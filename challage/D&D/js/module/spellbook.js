
import {getJSON, readFromLS, writeToLS} from "./utilities.js"



export default class Spellbook{
    constructor() {
        this.knowSpells = [];
        this.key = "spellsKnow";
        this.url = "https://www.dnd5eapi.co/api/spells";

        //Cheking LS for knowSpells & adding them if need 
        if (knowSpells.length == 0 && localStorage.getItem(this.key) !== null ){
            let ls = JSON.parse(readFromLS(key))
            ls.forEach(spell =>{
                this.knowSpells.push(spell);
            });
        }
    };

    async getAllSpells(){
        let data = await getJSON(this.url);
        let results = data.results;
        return results;
    }

    async getSpell(url){ 
        return getJSON(url);
    }

    async learnSpell(url){
        let spell = await this.getSpell(url)
        this.knowSpells.append(spell);
        writeToLS(this.key, this.knowSpells);
    }

    forgetSpell(spell_id){
        let spell = this.find(spell_id);
        let index = this.knowSpells.findIndex(spell);
        this.knowSpells = this.knowSpells.splice(index, 1);
        writeToLS(this.key, this.knowSpells);
    }

    find(spell_id){
        return this.knowSpells.find(spell => spell._id == spell_id);
    }

  

}








