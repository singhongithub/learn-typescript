var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log("id: " + this.id);
        console.log("name: " + this.name);
    };
    return Organizer;
}());
var Events = /** @class */ (function () {
    function Events(id, name, description, srarttime, endtime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.srarttime = srarttime;
        this.endtime = endtime;
    }
    Events.prototype.display = function () {
        console.log("id: " + this.id);
        console.log("name: " + this.name);
        console.log("description: " + this.description);
        console.log("srarttime: " + this.srarttime);
        console.log("endtime: " + this.endtime);
    };
    return Events;
}());
var Venue = /** @class */ (function () {
    function Venue(id, name, description, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log("id: " + this.id);
        console.log("name: " + this.name);
        console.log("description: " + this.description);
        console.log("address: " + this.address);
    };
    return Venue;
}());
var organizer = new Organizer(1, "Sanjay");
var events = new Events(1, "Ajay", "Marriage", "10:00 AM", "3:00 PM");
var venue = new Venue(1, "Palace", "Marriage Palace", "Suburb");
organizer.display();
events.display();
venue.display();
