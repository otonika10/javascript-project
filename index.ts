import LMS from "./modules/LMS";
import Subject from "./modules/LMS";
import subj from "./modules/LMS";
import { history1,math } from "./modules/LMS"; 
    //console.log(history.id)
    const lms = new LMS();
    lms.add(history1);
    lms.add(math);
    lms.verify(history1);
    lms.readAll();
    lms.remove(history1);
    lms.verify(history1);
    lms.readAll();



    import Teachers from "./modules/Teachers";
    import { teacher1,teacher2 } from "./modules/Teachers";
    const teachers = new Teachers();

// Create a new teacher
const teacherId = teachers.add(teacher1);
const teacherId2 = teachers.add(teacher2);
teachers.read(teacherId);
interface upd{
    name:{first:string,last:string}
    dateOfBirth:string,
    subjects:{subject:string}[]
}
const updatedProfile:upd = {
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
//console.log(teachers.read(teacherId))



import Pupils from "./modules/Pupils";
import { pup1,pup2,pup3 } from "./modules/Pupils";
const pupils = new Pupils();
// Create a new pupil

//console.log(pupils.add(pup1))
// will return Pupils data including pupil's id
const pupil:{id:string} = pupils.add(pup1);
const pupil2:{id:string} = pupils.add(pup2);
const pupil3:{id:string} = pupils.add(pup3);
const updatedProfile2:upd = {
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
var show0 = pupils.show(pupil.id)
var show = pupils.show(pupil.id)
var show2 = pupils.show(pupil2.id)
var show3 = pupils.show(pupil3.id)
//console.log(show.name.first)
var  fullpupil = pupils.read(pupil2.id);

// will remove pupil
pupils.remove(pupil.id);
//console.log(pupils.read(pupil.id));


import { Groups } from "./modules/Groups";
import { room } from "./modules/Groups";
const groups = new Groups();
const groupId:string = groups.add(room);
//console.log(groups.add(room))
groups.addPupil(groupId, pupil);
groups.removePupil(groupId, pupil.id);
groups.update(groupId, {
    room: 237
  });
groups.read(groupId);
groups.readAll()



//gradebook

class Gradebooks{
    gradebooks = new Map();
    groups:string
    teachers:string
    lms:string
    constructor(groups:any, teachers:any, lms:any) {
        this.groups = groups.readAll();
        this.teachers = teachers.readAll();
        this.lms = lms.readAll();
    }
    add(level:number, groupId:string) {
        let id =  "Grb" + Math.floor(Math.random()*90+10);
        this.gradebooks.set(id, { id, groupId, level, records: [] });
        //console.log(this.#gradebooks)
        return this.gradebooks.get(id);
    }
    clear() {
        this.gradebooks.get(gradebookId).records.splice(0);

        //console.log(this.gradebooks)
    }
    addRecord(gradebookId:string, record:Rec_check) {
        this.gradebooks.get(gradebookId).records.push(record);
                
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
        this.gradebooks.get(gradebookId).records = arr;
         //console.log(this.#gradebooks.get(gradebookId));
    }
    read(gradebookId:string, pupilId:string) {//from show method
      //if we will change |var show0 = pupils.show(pupil.id)| to |var show0 = pupils.show(pupil2.id)| we will get pupil2 and etc.
         for(let i in this.gradebooks.get(gradebookId).records){
            if(show0.first +" "+show0.last == this.gradebooks.get(gradebookId).records[i].name){
                return this.gradebooks.get(gradebookId).records[i]
            }
            if(typeof(show0.name)!='undefined'){
            if(show0.name.first +" "+show0.name.last == this.gradebooks.get(gradebookId).records[i].name){
                return this.gradebooks.get(gradebookId).records[i]
            } 
            }
        } 
       
    }
          
        
    
    readAll(gradebookId:string):[Rec_check]{   
        return this.gradebooks.get(gradebookId).records;
        //clear removes records too so we cant return records in that case in that case we need /return this.gradebooks/
    }
    
}
const pupilId:string = pupil.id;
const pupilId2:string = pupil2.id;
const pupilId3:string = pupil2.id;
const gradebooks = new Gradebooks(groups, teachers, lms);
const level:number = 1;
const gradebook = gradebooks.add(level, groupId);

interface Rec_check{
    pupilId:string
    teacherId:string
    subjectId:string
    lesson:number
    mark:number
}
const record:Rec_check = {
    pupilId: pupilId,
    teacherId: teacherId,
    subjectId: history1.title,
    lesson: 1,
    mark: 9
  };
  const record2:Rec_check = {
    pupilId: pupilId2,
    teacherId: teacherId2,
    subjectId: math.title,
    lesson: 5,
    mark: 10
  };
  var gradebookId:string = gradebook.id;
gradebooks.addRecord(gradebookId, record);
//gradebooks.clear();

const oliver = gradebooks.read(gradebookId, show0);

const students = gradebooks.readAll(gradebookId);
//console.log(students)
