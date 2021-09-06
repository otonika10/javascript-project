"use strict";
//teachers
exports.__esModule = true;
exports.teacher2 = exports.teacher1 = void 0;
var Teachers = /** @class */ (function () {
    function Teachers() {
        this.teachers = new Map();
    }
    Teachers.prototype.validate = function (teacher) {
        for (var i in teacher.emails) {
            var Reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!Reg.test(teacher.emails[i].email)) {
                throw new Error("Error: email is not valid");
            }
        }
        for (var i in teacher.dateOfBirth) {
            var Reg = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
            if (!Reg.test(teacher.dateOfBirth)) {
                throw new Error("Error: Invalid date");
            }
        }
        for (var i in teacher.phones) {
            var Reg = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
            if (!Reg.test(teacher.phones[i].phone)) {
                throw new Error("Error: number is not valid");
            }
        }
    };
    Teachers.prototype.add = function (name) {
        var obj = { id: "" };
        this.obj = name;
        this.validate(name);
        if (name.sex != 'male' && name.sex != 'female') {
            throw new Error("Error: not defined 'male' or 'female'.");
        }
        if (typeof (name.sex) == "undefined") {
            throw new Error("Error: not defined");
        }
        obj.id = "TCH#" + Math.floor(Math.random() * 90 + 10);
        this.teachers.set(obj.id, name);
        //console.log(this.#teachers)
        return obj.id;
    };
    Teachers.prototype.read = function (teacherId) {
        return this.teachers.get(teacherId);
    };
    Teachers.prototype.readAll = function () {
        return Array.from(this.teachers.values());
    };
    Teachers.prototype.update = function (teacherId, updatedProfile) {
        for (var i in updatedProfile) {
            this.teachers.get(teacherId)[i] = updatedProfile[i];
        }
    };
    Teachers.prototype.remove = function (teacherId) {
        this.teachers["delete"](teacherId);
    };
    return Teachers;
}());
exports["default"] = Teachers;
exports.teacher1 = {
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
exports.teacher2 = {
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
