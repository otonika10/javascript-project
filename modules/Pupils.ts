//pupil
export default class  Pupils{

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
export const pup1:Pup_Check = {
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

export const pup2:Pup_Check = {
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
export const pup3:Pup_Check = {
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