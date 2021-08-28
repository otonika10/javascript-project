
export default class  Teachers{
    constructor(name){
      this.name = name
    }

    #teachers = new Map();
    #validate(teacher) {
        let Reg = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
        if (!Reg.test(teacher.dateOfBirth)) {
            throw new Error("Error: Invalid date");
        }
        teacher.emails.forEach(email => {
            let Reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!Reg.test(email.email)) {
                throw new Error("Error: email is not valid")
            }
        });
        teacher.emails.forEach(email => {
            if (typeof(email.primary)!='boolean') {
                throw new Error("Error: incorrect type")
            }
            if (typeof(email.email)!='string') {
                throw new Error("Error: incorrect type")
            }
        });  
        teacher.phones.forEach(phone => {
            let Reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
            if(!Reg.test(phone.phone)) {
                throw new Error("Error: number is not valid");
            }
        });
        teacher.phones.forEach(phone => {
            if (typeof(phone.primary)!='boolean') {
                throw new Error("Error: incorrect type")
            }
            if (typeof(phone.phone)!='string') {
                throw new Error("Error: incorrect type")
            }
        });  
    }
    add(name){
        let obj = {}
        this.obj=name
        this.#validate(name)
        if (typeof (name.name.first) != "string") {
            throw new Error("Error: incorrect type");
        }
        if (typeof (name.name.last) != "string") {
            throw new Error("Error: incorrect type");
        }
        if (typeof (name.name) == "undefined") {
            throw new Error("Error: not defined");
        }
        if (typeof (name.image) != "string") {
            throw new Error("Error: incorrect type");
        }
        if (typeof (name.phones) == "undefined") {
            throw new Error("Error: not defined");
        }
        if (typeof (name.emails) == "undefined") {
            throw new Error("Error: not defined");
        }
        if (name.sex != 'male' && name.sex != 'female') {
            throw new Error("Error: not defined 'male' or 'female'.");
        }
        if (typeof (name.sex) == "undefined") {
            throw new Error("Error: not defined");
        }
        obj.id = "TCH#" + Math.floor(Math.random()*90+10);
        this.#teachers.set(obj.id, name);
        //console.log(this.#teachers)
        return obj.id
    }
    read(teacherId) {
        return this.#teachers.get(teacherId);
    }
    readAll() {
        return Array.from(this.#teachers.values());
    }
    update(teacherId, updatedProfile) {
        for (const i in updatedProfile) {
            this.#teachers.get(teacherId)[i] = updatedProfile[i];
        }
    }

    remove(teacherId) {
        this.#teachers.delete(teacherId);
    }
}


export const teacher1 = {
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
export const teacher2 = {
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
