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
exports.__esModule = true;
exports.math = exports.history1 = exports.subj = exports.Subject = void 0;
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
exports.Subject = Subject;
var subj = /** @class */ (function (_super) {
    __extends(subj, _super);
    function subj(name) {
        return _super.call(this, name) || this;
    }
    return subj;
}(Subject));
exports.subj = subj;
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
exports["default"] = LMS;
exports.history1 = new Subject({
    title: 'History',
    lessons: 24
});
exports.math = new Subject({
    title: 'Math',
    lessons: 24
});
