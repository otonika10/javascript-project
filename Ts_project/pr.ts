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
