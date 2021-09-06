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
