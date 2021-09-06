"use strict";
//groups
exports.__esModule = true;
exports.room = exports.Groups = void 0;
var Groups = /** @class */ (function () {
    function Groups() {
        this.groups = new Map();
        this.arr = [];
    }
    Groups.prototype.add = function (room) {
        var id = "JEF" + Math.floor(Math.random() * 9 + 1) + "H" + Math.floor(Math.random() * 90 + 10) + "H";
        this.groups.set(id, { id: id, room: room });
        return id;
    };
    Groups.prototype.addPupil = function (groupId, pupilId) {
        this.arr.push(pupilId);
        this.groups.set(exports.room, this.arr);
        /* this.groups.pupils = [];
        this.groups.pupils.push(pupilId); */
        //console.log(pupilId.id)
    };
    Groups.prototype.removePupil = function (groupId, pupilId) {
        //console.log(this.#groups)
        /*         for(let i in this.groups.pupils){
                   if(this.groups.pupils[i].id==pupilId){
                       this.groups.pupils.splice(i,1)
                       //console.log(this.#groups)
                   }
               } */
        for (var i in this.groups.get(exports.room)) {
            if (this.groups.get(exports.room)[i].id == pupilId) {
                this.groups.get(exports.room).splice(i, 1);
                //console.log(this.groups.get(room))
            }
        }
    };
    Groups.prototype.update = function (groupId, obj) {
        for (var i in obj) {
            this.groups.get(groupId)[i] = obj;
            //console.log(this.#groups.get(groupId)[i])
        }
    };
    Groups.prototype.read = function (groupId) {
        //console.log(this.#groups.get(groupId))
        return this.groups.get(groupId);
    };
    Groups.prototype.readAll = function () {
        //console.log(Array.from(this.#groups))
        return Array.from(this.groups);
    };
    return Groups;
}());
exports.Groups = Groups;
exports.room = 236;
