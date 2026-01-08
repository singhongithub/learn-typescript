var Organizer = /** @class */ (function () {
    function Organizer(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    Object.defineProperty(Organizer.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organizer.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Organizer;
}());
var Events = /** @class */ (function () {
    function Events(_id, _name, _description, _starttime, _endtime) {
        this._id = _id;
        this._name = _name;
        this._description = _description;
        this._starttime = _starttime;
        this._endtime = _endtime;
    }
    Object.defineProperty(Events.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "starttime", {
        get: function () {
            return this._starttime;
        },
        set: function (starttime) {
            this._starttime = starttime;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "endtime", {
        get: function () {
            return this._endtime;
        },
        set: function (endtime) {
            this._endtime = endtime;
        },
        enumerable: false,
        configurable: true
    });
    return Events;
}());
var Venue = /** @class */ (function () {
    function Venue(_id, _name, _description, address) {
        this._id = _id;
        this._name = _name;
        this._description = _description;
        this._address = address;
    }
    Object.defineProperty(Venue.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (description) {
            this._description = description;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "address", {
        get: function () {
            return this._address;
        },
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    return Venue;
}());
var organizer = new Organizer(1, "Sanjay");
organizer.name = "Rajesh";
var events = new Events(1, "Ajay", "Marriage", "10:00 AM", "3:00 PM");
events.endtime = "4:00 PM";
var venue = new Venue(1, "Palace", "Marriage Palace", "Suburb");
console.log("id: " + organizer.id);
console.log("name: " + organizer.name);
console.log("id: " + events.id);
console.log("name: " + events.name);
console.log("description: " + events.description);
console.log("srarttime: " + events.starttime);
console.log("endtime: " + events.endtime);
console.log("id: " + venue.id);
console.log("name: " + venue.name);
console.log("description: " + venue.description);
console.log("address: " + venue.address);
