
import {getJSON} from "./utilities.js"



export default class Spellbook{
    constructor() {
        this.knowSpells = [];
        this.url = "https://www.dnd5eapi.co/api/spells";

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
    }

    forgetSpell(spell_id){
        let spell = this.knowSpells.find(spell => spell._id == spell_id);
        let index = this.knowSpells.findIndex(spell);
        this.knowSpells = this.knowSpells.splice(index, 1);
    }



}








