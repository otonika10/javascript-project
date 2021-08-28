export default class Groups{
    #groups = new Map();
    add(room) {
        let id = "JEF" + Math.floor(Math.random()*9+1)+"H"+ Math.floor(Math.random()*90+10)+"H";
        this.#groups.set(id, { id, room});
        return id;
    }
    addPupil(groupId, pupilId) {
            this.#groups.pupils = [];
            this.#groups.pupils.push(pupilId);
            //console.log(pupilId.id)
    }

    removePupil(groupId, pupilId) {
        //console.log(this.#groups)
        for(let i in this.#groups.pupils){
            if(this.#groups.pupils[i].id==pupilId){
                this.#groups.pupils.splice(i,1)
                //console.log(this.#groups)
            }
        }
    }
    update(groupId, obj) {
        for (const i in obj) {
            this.#groups.get(groupId)[i] = obj[i];
            //console.log(this.#groups.get(groupId)[i])
        }
    }

    read(groupId) {
        //console.log(this.#groups.get(groupId))
        return this.#groups.get(groupId);
    }

    readAll() {
        //console.log(Array.from(this.#groups))
        return Array.from(this.#groups);
    }
}
//gradebook

 
