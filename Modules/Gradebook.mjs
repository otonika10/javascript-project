import { show0,show,show2,show3 } from "../Index.mjs";

export default class Gradebooks{
    #gradebooks = new Map();
    constructor(groups, teachers, lms) {
        this.groups = groups.readAll();
        this.teachers = teachers.readAll();
        this.lms = lms.readAll();
    }
    add(level, groupId) {
        let id =  "Grb" + Math.floor(Math.random()*90+10);
        this.#gradebooks.set(id, { id, groupId, level, records: [] });
        //console.log(this.#gradebooks)
        return this.#gradebooks.get(id);
    }
    clear() {
        this.#gradebooks.clear();
        if(typeof(this.#gradebooks.records)!='undefined')
        if(this.#gradebooks.records.length>0){
            this.#gradebooks.records.splice(0)
        }
        console.log(this.#gradebooks)
    }
    addRecord(gradebookId, record) {
        this.#gradebooks.get(gradebookId).records.push(record);
                
        let obj = {name:show.first+" "+show.last, 
        record:{teacherId: record.teacherId,
            subjectId: record.subjectId,
            lesson: record.lesson,
            mark: record.mark}}
        let obj2 = {name:show2.name.first+" "+show2.name.last, 
        record:{teacherId: record2.teacherId,
        subjectId: record2.subjectId,
        lesson: record2.lesson,
        mark: record2.mark}}
        let obj3 = {name:show3.name.first+" "+show3.name.last, 
        record:{teacherId: record.teacherId,
            subjectId: record.subjectId,
            lesson: record.lesson,
            mark: record.mark}}
        let arr = [];
        arr.push(obj,obj2,obj3)
        this.#gradebooks.records = arr;
         //console.log(this.#gradebooks.get(gradebookId));
    }
    read(gradebookId, pupilId) {//from show method
      //if we will change |var show0 = pupils.show(pupil.id)| to |var show0 = pupils.show(pupil2.id)| we will get pupil2 and etc.
        for(let i in this.#gradebooks.records){
            if(show0.first +" "+show0.last == this.#gradebooks.records[i].name){
                return this.#gradebooks.records[i]
            }
            if(typeof(show0.name)!='undefined'){
            if(show0.name.first +" "+show0.name.last == this.#gradebooks.records[i].name){
                return this.#gradebooks.records[i]
            } 
            }
        }
       
    }
          
        
    
    readAll(gradebookId){   
        return this.#gradebooks.records;
    }
    
}