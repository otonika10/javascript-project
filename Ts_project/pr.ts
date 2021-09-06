//polymorphism
class subs {
    name: string;
    lesson:number;
    constructor(theName: string,thelesson:number) { this.name = theName
    this.lesson = thelesson; }
    p() {
        console.log(this.name+ " lesson " +this.lesson);
    }
}
class sub extends subs {
    constructor(name: string,lesson:number) { super(name,lesson); }
    p() {
        super.p();
    }
}
let subj1: subs[] = [new sub('history',1)];
subj1.forEach(subs => {
    subs.p();
})
//abstract
abstract class Department {
    constructor(public title: string) {}
    static Id:number = 1;
    getId(): string {
        return this.title +" "+ "Sub# " + Department.Id++;
    }

    abstract printId(): void;
}
class Item extends Department{
    constructor(public name: string) {
        super(name);
    }

    printId() {
        const id: string = super.getId();
        return id
    }
}
const item: Item = new Item('');
item.printId();

//lms
interface Sub{
    id?:string

}
interface sub2{
    title:string
    lessons:number
}
interface sub3 extends Sub,sub2{
   readonly description?:any
}

interface Sub_Check{
    id:string
    title:string

}
interface Sub_Check2{
    lessons:number
    description?:string
}

class Subject{
    static Id:number = 1;
    id:string;
    title:string;
    lessons:number;
    description:any;
    constructor(name:sub3){
        this.id ="Sub# " + Subject.Id++;
        this.title = name.title;
        this.lessons = name.lessons;
        if(typeof(name.description)!='undefined'){
            this.description = name.description
        }
        if(typeof(name.lessons)!="number"){
            throw new Error("Error: incorrect type")
        }
        if(typeof(name.title)!="string"){
            throw new Error("Error: incorrect type")
        }
    }
}
class subj extends Subject{
    constructor(name:sub3){super(name)}
    
}
class LMS {
    sub:any = [];
    add(name:Sub_Check & Sub_Check2){
        this.sub.push(name)
        //console.log(name)
    }
    remove(name:Sub_Check & Sub_Check2) {
        this.sub.splice(this.sub.indexOf(name), 1);
    }
    verify(name:Sub_Check & Sub_Check2):Boolean {
        return this.sub.indexOf(name) != -1;
    }
    readAll():Sub_Check & Sub_Check2 {
        return this.sub;
    }
}
const history1:Sub_Check & Sub_Check2 = new Subject({
title: 'History',
lessons: 24 
});
const math:Sub_Check & Sub_Check2 = new Subject({
title: 'Math',
lessons: 24
});  
//console.log(history.id)
const lms = new LMS();
lms.add(history1);
lms.add(math);
lms.verify(history1);
lms.readAll();
lms.remove(history1);
lms.verify(history1);
lms.readAll();
//------------------------------

//teachers

class  Teachers{


    teachers = new Map();
     private validate(teacher:any) {
        for(let i in teacher.emails){
            let Reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!Reg.test(teacher.emails[i].email)) {
                throw new Error("Error: email is not valid")
            }
        }
        for(let i in teacher.dateOfBirth){
            let Reg = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
            if (!Reg.test(teacher.dateOfBirth)) {
                throw new Error("Error: Invalid date");
            }
        }
        for(let i in teacher.phones){
            let Reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
            if(!Reg.test(teacher.phones[i].phone)) {
                throw new Error("Error: number is not valid");
            }
        }
    }
    obj:any
    add(name:Tich_Check){
        let obj = {id:""}
        this.obj=name
        this.validate(name)

        if (name.sex != 'male' && name.sex != 'female') {
            throw new Error("Error: not defined 'male' or 'female'.");
        }
        if (typeof (name.sex) == "undefined") {
            throw new Error("Error: not defined");
        }
        obj.id = "TCH#" + Math.floor(Math.random()*90+10);
        this.teachers.set(obj.id, name);
        //console.log(this.#teachers)
        return obj.id
    }
    read(teacherId:string):Tich_Check {
        return this.teachers.get(teacherId);
    }
    readAll() {
        return Array.from(this.teachers.values());
    }
    update(teacherId:string, updatedProfile:any) {
        for (const i in updatedProfile) {
            this.teachers.get(teacherId)[i] = updatedProfile[i];
        }
    }

    remove(teacherId:any) {
        this.teachers.delete(teacherId);
    }
}

interface Tich_Check{
    name:{first:string, last:string}
    image:string
    dateOfBirth:string
    emails:{email:string;primary:boolean}[];
    phones:{phone:string;primary:boolean}[];
    subjects:{subject:string}[];
    sex:string
}


const teacher1:Tich_Check = {
    name: {
        first: "Oto",
        last: "Avlokhashvili"
    },
    image: "image",
    dateOfBirth: "27.10.2005",
    emails: [
        {
            email: "oto.avloxashvili10@gmail.com",
            primary: true
        },
        {
            email: "19200105@ibsu.edu.ge",
            primary: false
        }
    ],
    phones: [
        {
            phone: "592-22-25-05",
            primary: true
        }
    ],
    sex: "male",
    subjects: [
        {
            subject: "History"
        }
    ]
};

//var em = teacher1.emails[0].email
const teacher2:Tich_Check = {
    name: {
        first: "ajax",
        last: "bubble"
    },
    image: "image",
    dateOfBirth: "21.10.2000",
    emails: [
        {
            email: "ajax.buble@gmail.com",
            primary: true
        },
        {
            email: "19200200@ibsu.edu.ge",
            primary: false
        }
    ],
    phones: [
        {
            phone: "592-26-28-05",
            primary: true
        }
    ],
    sex: "male",
    subjects: [
        {
            subject: "math"
        }
    ]
};
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
//pupil
class  Pupils{

    private pupils = new Map();
    
     private validate(pupil:any) {
        for(let i in pupil.dateOfBirth){
            let Reg = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
            if (!Reg.test(pupil.dateOfBirth)) {
                throw new Error("Error: Invalid date");
            }
        }
        for(let i in pupil.phones){
            let Reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
            if(!Reg.test(pupil.phones[i].phone)) {
                throw new Error("Error: number is not valid");
            }
        } 
    } 
    obj:any
    add(name:Pup_Check){
        
        let obj = {id:""}
        this.obj=name
        this.validate(name)

        if (name.sex != 'male' && name.sex != 'female') {
            throw new Error("Error: not defined 'male' or 'female'");
        }
        if (typeof (name.sex) == "undefined") {
            throw new Error("Error: not defined");
        }
        obj.id = "PUP#" + Math.floor(Math.random()*900+100);
        this.pupils.set(obj.id,{obj, name});
        //console.log(obj)
        return obj
        
    }

    read <T>(pupilId:T):T {//Generic
        return this.pupils.get(pupilId);
    }

    update(pupilId:string, updatedProfile2:any) {
        for (const i in updatedProfile2) {
            this.pupils.get(pupilId)[i] = updatedProfile2[i];
        }
    }

    remove(pupilId:string) {
        this.pupils.delete(pupilId);
    }
    show(pupilId:string){
        return this.pupils.get(pupilId).name
    }
}

interface Pup_Check{
    name:{first:string, last:string}
    image:string
    dateOfBirth:string
    phones:{phone:string;primary:boolean}[];
    sex:string
}
const pup1:Pup_Check = {
    name: {
        first: "mir",
        last: "lom"
    },
    image: "photo",
    dateOfBirth: "07.04.2001",
    phones: [
        {
            phone: "595-02-75-07",
            primary: true
        }
    ],
    sex: "male",
};

const pup2:Pup_Check = {
    name: {
        first: "Vano",
        last: "Smash"
    },
    phones: [
        {
            phone: "599-98-89-89",
            primary: true
        }
    ],
    image: "vanessa_image",
    dateOfBirth: "02.10.1994",
    sex: "female"
}
const pup3:Pup_Check = {
    name: {
        first: "damn",
        last: "nmad"
    },
    phones: [
        {
            phone: "599-98-89-81",
            primary: true
        }
    ],
    image: "vanessa_image",
    dateOfBirth: "02.07.1974",
    sex: "female"
}
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
var show2:Pup_Check = pupils.show(pupil2.id)
var show3:Pup_Check = pupils.show(pupil3.id)
//console.log(show.name.first)
var  fullpupil = pupils.read(pupil2.id);

// will remove pupil
pupils.remove(pupil.id);
//console.log(pupils.read(pupil.id));

//groups

class Groups{
     groups = new Map();
     arr:any = []
    add(room:number):string {
        
        let id:string = "JEF" + Math.floor(Math.random()*9+1)+"H"+ Math.floor(Math.random()*90+10)+"H";
        this.groups.set(id, { id, room,});
        return id;
    }
    
    addPupil(groupId:string, pupilId:{id:string}) {
            
            this.arr.push(pupilId)
            this.groups.set(room,this.arr)
            
            /* this.groups.pupils = [];
            this.groups.pupils.push(pupilId); */
            //console.log(pupilId.id)
    }

    removePupil(groupId:string, pupilId:string) {
        //console.log(this.#groups)
/*         for(let i in this.groups.pupils){
            if(this.groups.pupils[i].id==pupilId){
                this.groups.pupils.splice(i,1)
                //console.log(this.#groups)
            }
        } */
        for(let i in this.groups.get(room)){
            if(this.groups.get(room)[i].id==pupilId){
                this.groups.get(room).splice(i,1)
                //console.log(this.groups.get(room))
            }
        } 
    }
    update(groupId:string, obj:{room:number}) {
        for (const i in obj) {
            this.groups.get(groupId)[i] = obj;
            //console.log(this.#groups.get(groupId)[i])
        }
    }

    read <T>(groupId:T):T {//Generic
        //console.log(this.#groups.get(groupId))
        return this.groups.get(groupId);
    }

    readAll() {
        //console.log(Array.from(this.#groups))
        return Array.from(this.groups);
    }
}

const room:number = 236;
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
