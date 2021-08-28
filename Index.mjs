//lms
import LMS from './Modules/LMS.mjs'
import Subject from './Modules/LMS.mjs'
import { history,math } from './Modules/LMS.mjs';

    //console.log(history.id)
    const lms = new LMS();
    lms.add(history);
    lms.add(math);
    lms.verify(history);
    export var a = lms.readAll();
    //lms.remove(history);
    lms.verify(history);
    lms.readAll();
    
//teachers
import Teachers from './Modules/Teachers.mjs'
import { teacher1,teacher2 } from './Modules/Teachers.mjs';
const teachers = new Teachers();

// Create a new teacher
const teacherId = teachers.add(teacher1);
const teacherId2 = teachers.add(teacher2);
teachers.read(teacherId);
const updatedProfile = {
    name: {
        first: "Otar",
        last: "Avlokhashvili"
    },
    dateOfBirth: "22.10.2001",
    subjects: [
        {
            subject: "Math"
        }
    ]
}
teachers.read(teacherId);
const newTeacherId = teachers.update(teacherId, updatedProfile);
//console.log(teachers.read(teacherId))
teachers.remove(teacherId)
export var c = teachers.readAll()
//console.log(teachers.read(teacherId))
//pupils
import Pupils from './Modules/Pupils.mjs'
import { pup1,pup2,pup3 } from './Modules/Pupils.mjs';

const pupils = new Pupils();
// Create a new pupil

//console.log(pupils.add(pup1))
// will return Pupils data including pupil's id
const pupil = pupils.add(pup1);
const pupil2 = pupils.add(pup2);
const pupil3 = pupils.add(pup3);
const updatedProfile2 = {
    name: {
        first: "miranda",
        last: "lomouri"
    },
    dateOfBirth: "14.04.1973",
    subjects: [
        {
            subject: "Math"
        }
    ]
}
// will update Pupil. This method should use the same validation as a constructor method
pupils.update(pupil.id, updatedProfile2)
export var show0 = pupils.show(pupil.id)
export var show = pupils.show(pupil.id)
export var show2 = pupils.show(pupil2.id)
export var show3 = pupils.show(pupil3.id)
//console.log(show.name.first)
var  fullpupil = pupils.read(pupil2.id);

// will remove pupil
pupils.remove(pupil.id);
//console.log(pupils.read(pupil.id));
//groups

import Groups from './Modules/Groups.mjs'

const room = 236;
const groups = new Groups();
const groupId = groups.add(room);
//console.log(groups.add(room))
groups.addPupil(groupId, pupil);
groups.removePupil(groupId, pupil.id);
groups.update(groupId, {
    room: 237
  });
groups.read(groupId);
export var b = groups.readAll()
//console.log(groups.read(groupId))

//gradebook
class Gradebooks{
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
const pupilId = pupil.id;
const pupilId2 = pupil2.id;
const pupilId3 = pupil2.id;
const gradebooks = new Gradebooks(groups, teachers, lms);
const level = 1;
const gradebook = gradebooks.add(level, groupId);

const record = {
    pupilId: pupilId,
    teacherId: teacherId,
    subjectId: history.title,
    lesson: 1,
    mark: 9
  };
  const record2 = {
    pupilId: pupilId2,
    teacherId: teacherId2,
    subjectId: math.title,
    lesson: 5,
    mark: 10
  };
  var gradebookId = gradebook.id;
gradebooks.addRecord(gradebookId, record);
//gradebooks.clear();

const oliver = gradebooks.read(gradebookId, show0);

const students = gradebooks.readAll(gradebookId);
console.log(students)
