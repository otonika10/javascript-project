"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//polymorphism
var subs = /** @class */ (function () {
    function subs(theName, thelesson) {
        this.name = theName;
        this.lesson = thelesson;
    }
    subs.prototype.p = function () {
        //console.log(this.name+ " lesson " +this.lesson);
    };
    return subs;
}());
var sub = /** @class */ (function (_super) {
    __extends(sub, _super);
    function sub(name, lesson) {
        return _super.call(this, name, lesson) || this;
    }
    sub.prototype.p = function () {
        _super.prototype.p.call(this);
    };
    return sub;
}(subs));
var subj1 = [new sub('history', 1)];
subj1.forEach(function (subs) {
    subs.p();
});
//abstract
var Department = /** @class */ (function () {
    function Department(title) {
        this.title = title;
    }
    Department.prototype.getId = function () {
        return this.title + " " + "Sub# " + Department.Id++;
    };
    Department.Id = 1;
    return Department;
}());
var Item = /** @class */ (function (_super) {
    __extends(Item, _super);
    function Item(name) {
        var _this = _super.call(this, name) || this;
        _this.name = name;
        return _this;
    }
    Item.prototype.printId = function () {
        var id = _super.prototype.getId.call(this);
        return id;
    };
    return Item;
}(Department));
var item = new Item('');
item.printId();
var Subject = /** @class */ (function () {
    function Subject(name) {
        this.id = "Sub# " + Subject.Id++;
        this.title = name.title;
        this.lessons = name.lessons;
        if (typeof (name.description) != 'undefined') {
            this.description = name.description;
        }
        if (typeof (name.lessons) != "number") {
            throw new Error("Error: incorrect type");
        }
        if (typeof (name.title) != "string") {
            throw new Error("Error: incorrect type");
        }
    }
    Subject.Id = 1;
    return Subject;
}());
var subj = /** @class */ (function (_super) {
    __extends(subj, _super);
    function subj(name) {
        return _super.call(this, name) || this;
    }
    return subj;
}(Subject));
var LMS = /** @class */ (function () {
    function LMS() {
        this.sub = [];
    }
    LMS.prototype.add = function (name) {
        this.sub.push(name);
        //console.log(name)
    };
    LMS.prototype.remove = function (name) {
        this.sub.splice(this.sub.indexOf(name), 1);
    };
    LMS.prototype.verify = function (name) {
        return this.sub.indexOf(name) != -1;
    };
    LMS.prototype.readAll = function () {
        return this.sub;
    };
    return LMS;
}());
var history1 = new Subject({
    title: 'History',
    lessons: 24
});
var math = new Subject({
    title: 'Math',
    lessons: 24
});
//console.log(history.id)
var lms = new LMS();
lms.add(history1);
lms.add(math);
lms.verify(history1);
lms.readAll();
lms.remove(history1);
lms.verify(history1);
lms.readAll();
//------------------------------
//teachers
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
        this.teachers.delete(teacherId);
    };
    return Teachers;
}());
var teacher1 = {
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
var teacher2 = {
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
var teachers = new Teachers();
// Create a new teacher
var teacherId = teachers.add(teacher1);
var teacherId2 = teachers.add(teacher2);
teachers.read(teacherId);
var updatedProfile = {
    name: {
        first: "Otar",
        last: "Avlokhashvili"
    },
    dateOfBirth: "22.10.2001",
    subjects: [
        {
            subject: "Math"
        }
    ]
};
teachers.read(teacherId);
var newTeacherId = teachers.update(teacherId, updatedProfile);
//console.log(teachers.read(teacherId))
teachers.remove(teacherId);
//console.log(teachers.read(teacherId))
//-------------
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
        this.pupils.delete(pupilId);
    };
    Pupils.prototype.show = function (pupilId) {
        return this.pupils.get(pupilId).name;
    };
    return Pupils;
}());
var pup1 = {
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
var pup2 = {
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
var pup3 = {
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
var pupils = new Pupils();
// Create a new pupil
//console.log(pupils.add(pup1))
// will return Pupils data including pupil's id
var pupil = pupils.add(pup1);
var pupil2 = pupils.add(pup2);
var pupil3 = pupils.add(pup3);
var updatedProfile2 = {
    name: {
        first: "miranda",
        last: "lomouri"
    },
    dateOfBirth: "14.04.1973",
    subjects: [
        {
            subject: "Math"
        }
    ]
};
// will update Pupil. This method should use the same validation as a constructor method
pupils.update(pupil.id, updatedProfile2);
var show0 = pupils.show(pupil.id);
var show = pupils.show(pupil.id);
var show2 = pupils.show(pupil2.id);
var show3 = pupils.show(pupil3.id);
//console.log(show.name.first)
var fullpupil = pupils.read(pupil2.id);
// will remove pupil
pupils.remove(pupil.id);
//console.log(pupils.read(pupil.id));
//-----------------
//groups
var Groups = /** @class */ (function () {
    function Groups() {
        this.groups = new Map();
        this.arr = [];
    }
    Groups.prototype.add = function (room) {
        var id = "JEF" + Math.floor(Math.random() * 9 + 1) + "H" + Math.floor(Math.random() * 90 + 10) + "H";
        this.groups.set(id, { id: id, room: room, });
        return id;
    };
    Groups.prototype.addPupil = function (groupId, pupilId) {
        this.arr.push(pupilId);
        this.groups.set(room, this.arr);
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
        for (var i in this.groups.get(room)) {
            if (this.groups.get(room)[i].id == pupilId) {
                this.groups.get(room).splice(i, 1);
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
var room = 236;
var groups = new Groups();
var groupId = groups.add(room);
//console.log(groups.add(room))
groups.addPupil(groupId, pupil);
groups.removePupil(groupId, pupil.id);
groups.update(groupId, {
    room: 237
});
groups.read(groupId);
groups.readAll();
//-------------------
//gradebook
var Gradebooks = /** @class */ (function () {
    function Gradebooks(groups, teachers, lms) {
        this.gradebooks = new Map();
        this.groups = groups.readAll();
        this.teachers = teachers.readAll();
        this.lms = lms.readAll();
    }
    Gradebooks.prototype.add = function (level, groupId) {
        var id = "Grb" + Math.floor(Math.random() * 90 + 10);
        this.gradebooks.set(id, { id: id, groupId: groupId, level: level, records: [] });
        //console.log(this.#gradebooks)
        return this.gradebooks.get(id);
    };
    Gradebooks.prototype.clear = function () {
        this.gradebooks.get(gradebookId).records.splice(0);
        //console.log(this.gradebooks)
    };
    Gradebooks.prototype.addRecord = function (gradebookId, record) {
        this.gradebooks.get(gradebookId).records.push(record);
        var obj = { name: show.first + " " + show.last,
            record: { teacherId: record.teacherId,
                subjectId: record.subjectId,
                lesson: record.lesson,
                mark: record.mark } };
        var obj2 = { name: show2.name.first + " " + show2.name.last,
            record: { teacherId: record2.teacherId,
                subjectId: record2.subjectId,
                lesson: record2.lesson,
                mark: record2.mark } };
        var obj3 = { name: show3.name.first + " " + show3.name.last,
            record: { teacherId: record.teacherId,
                subjectId: record.subjectId,
                lesson: record.lesson,
                mark: record.mark } };
        var arr = [];
        arr.push(obj, obj2, obj3);
        this.gradebooks.get(gradebookId).records = arr;
        //console.log(this.#gradebooks.get(gradebookId));
    };
    Gradebooks.prototype.read = function (gradebookId, pupilId) {
        //if we will change |var show0 = pupils.show(pupil.id)| to |var show0 = pupils.show(pupil2.id)| we will get pupil2 and etc.
        for (var i in this.gradebooks.get(gradebookId).records) {
            if (show0.first + " " + show0.last == this.gradebooks.get(gradebookId).records[i].name) {
                return this.gradebooks.get(gradebookId).records[i];
            }
            if (typeof (show0.name) != 'undefined') {
                if (show0.name.first + " " + show0.name.last == this.gradebooks.get(gradebookId).records[i].name) {
                    return this.gradebooks.get(gradebookId).records[i];
                }
            }
        }
    };
    Gradebooks.prototype.readAll = function (gradebookId) {
        return this.gradebooks.get(gradebookId).records;
        //clear removes records too so we cant return records in that case in that case we need /return this.gradebooks/
    };
    return Gradebooks;
}());
var pupilId = pupil.id;
var pupilId2 = pupil2.id;
var pupilId3 = pupil2.id;
var gradebooks = new Gradebooks(groups, teachers, lms);
var level = 1;
var gradebook = gradebooks.add(level, groupId);
var record = {
    pupilId: pupilId,
    teacherId: teacherId,
    subjectId: history1.title,
    lesson: 1,
    mark: 9
};
var record2 = {
    pupilId: pupilId2,
    teacherId: teacherId2,
    subjectId: math.title,
    lesson: 5,
    mark: 10
};
var gradebookId = gradebook.id;
gradebooks.addRecord(gradebookId, record);
//gradebooks.clear();
var oliver = gradebooks.read(gradebookId, show0);
var students = gradebooks.readAll(gradebookId);
//console.log(students)
