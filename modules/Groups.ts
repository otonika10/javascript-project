//groups

export class Groups{
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
export const room:number = 236;