//teachers

export default class  Teachers{


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


export const teacher1:Tich_Check = {
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
export const teacher2:Tich_Check = {
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