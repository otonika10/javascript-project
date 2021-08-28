//lms
export class Subject{
    static #Id = 1;
    constructor(name){
        this.id ="Sub# " + Subject.#Id++;
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
export default class LMS {
    #sub = [];
    add(name) {
        this.#sub.push(name)
    }
    remove(name) {
        this.#sub.splice(this.#sub.indexOf(name), 1);
    }
    verify(name) {
        return this.#sub.indexOf(name) != -1;
    }
    readAll() {
        return this.#sub;
    }
}
export const history = new Subject({
    title: 'History',
    lessons: 24 
    });
export const math = new Subject({
    title: 'Math',
    lessons: 24
    });  
