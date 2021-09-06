"use strict";
exports.__esModule = true;
var LMS_1 = require("./modules/LMS");
var LMS_2 = require("./modules/LMS");
//console.log(history.id)
var lms = new LMS_1["default"]();
lms.add(LMS_2.history1);
lms.add(LMS_2.math);
lms.verify(LMS_2.history1);
lms.readAll();
lms.remove(LMS_2.history1);
lms.verify(LMS_2.history1);
lms.readAll();
var Teachers_1 = require("./modules/Teachers");
var Teachers_2 = require("./modules/Teachers");
var teachers = new Teachers_1["default"]();
// Create a new teacher
var teacherId = teachers.add(Teachers_2.teacher1);
var teacherId2 = teachers.add(Teachers_2.teacher2);
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
var Pupils_1 = require("./modules/Pupils");
var Pupils_2 = require("./modules/Pupils");
var pupils = new Pupils_1["default"]();
// Create a new pupil
//console.log(pupils.add(pup1))
// will return Pupils data including pupil's id
var pupil = pupils.add(Pupils_2.pup1);
var pupil2 = pupils.add(Pupils_2.pup2);
var pupil3 = pupils.add(Pupils_2.pup3);
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
var Groups_1 = require("./modules/Groups");
var Groups_2 = require("./modules/Groups");
var groups = new Groups_1.Groups();
var groupId = groups.add(Groups_2.room);
//console.log(groups.add(room))
groups.addPupil(groupId, pupil);
groups.removePupil(groupId, pupil.id);
groups.update(groupId, {
    room: 237
});
groups.read(groupId);
groups.readAll();
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
    subjectId: LMS_2.history1.title,
    lesson: 1,
    mark: 9
};
var record2 = {
    pupilId: pupilId2,
    teacherId: teacherId2,
    subjectId: LMS_2.math.title,
    lesson: 5,
    mark: 10
};
var gradebookId = gradebook.id;
gradebooks.addRecord(gradebookId, record);
//gradebooks.clear();
var oliver = gradebooks.read(gradebookId, show0);
var students = gradebooks.readAll(gradebookId);
console.log(students)
