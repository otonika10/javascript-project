"use strict";
exports.__esModule = true;
exports.pup3 = exports.pup2 = exports.pup1 = void 0;
//pupil
var Pupils = /** @class */ (function () {
    function Pupils() {
        this.pupils = new Map();
    }
    Pupils.prototype.validate = function (pupil) {
        for (var i in pupil.dateOfBirth) {
            var Reg = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
            if (!Reg.test(pupil.dateOfBirth)) {
                throw new Error("Error: Invalid date");
            }
        }
        for (var i in pupil.phones) {
            var Reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
            if (!Reg.test(pupil.phones[i].phone)) {
                throw new Error("Error: number is not valid");
            }
        }
    };
    Pupils.prototype.add = function (name) {
        var obj = { id: "" };
        this.obj = name;
        this.validate(name);
        if (name.sex != 'male' && name.sex != 'female') {
            throw new Error("Error: not defined 'male' or 'female'");
        }
        if (typeof (name.sex) == "undefined") {
            throw new Error("Error: not defined");
        }
        obj.id = "PUP#" + Math.floor(Math.random() * 900 + 100);
        this.pupils.set(obj.id, { obj: obj, name: name });
        //console.log(obj)
        return obj;
    };
    Pupils.prototype.read = function (pupilId) {
        return this.pupils.get(pupilId);
    };
    Pupils.prototype.update = function (pupilId, updatedProfile2) {
        for (var i in updatedProfile2) {
            this.pupils.get(pupilId)[i] = updatedProfile2[i];
        }
    };
    Pupils.prototype.remove = function (pupilId) {
        this.pupils["delete"](pupilId);
    };
    Pupils.prototype.show = function (pupilId) {
        return this.pupils.get(pupilId).name;
    };
    return Pupils;
}());
exports["default"] = Pupils;
exports.pup1 = {
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
    sex: "male"
};
exports.pup2 = {
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
};
exports.pup3 = {
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
};
