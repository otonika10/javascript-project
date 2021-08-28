//pupil
export default class  Pupils{
    constructor(name){
      this.name = name
    }
    #pupils = new Map();
    #validate(pupil) {
        let Reg = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
        if (!Reg.test(pupil.dateOfBirth)) {
            throw new Error("Error: Invalid date");
        }
        pupil.phones.forEach(phone => {
            let Reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
            if(!Reg.test(phone.phone)) {
                throw new Error("Error: number is not valid");
            }
        });     
        pupil.phones.forEach(phone => {
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

        if (name.sex != 'male' && name.sex != 'female') {
            throw new Error("Error: not defined 'male' or 'female'");
        }
        if (typeof (name.sex) == "undefined") {
            throw new Error("Error: not defined");
        }
        obj.id = "PUP#" + Math.floor(Math.random()*900+100);
        this.#pupils.set(obj.id,{obj, name});
        //console.log(obj)
        return obj
        
    }

    read(pupilId) {
        return this.#pupils.get(pupilId);
    }

    update(pupilId, updatedProfile2) {
        for (const i in updatedProfile2) {
            this.#pupils.get(pupilId)[i] = updatedProfile2[i];
        }
    }

    remove(pupilId) {
        this.#pupils.delete(pupilId);
    }
    show(pupilId){
        return this.#pupils.get(pupilId).name
    }
}
export const pup1 = {
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

export const pup2 = {
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
export const pup3 = {
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
