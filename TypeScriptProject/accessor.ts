class Organizer {
    private _id: number;
    private _name: string;

    constructor(_id: number, _name: string) {
        this._id = _id;
        this._name = _name;
    }

    get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;

    }

     get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;

    }

}

class Events {
    private _id: number;
    private _name: string;
    private _description: string;
    private _starttime: string;
    private _endtime: string;

    constructor(_id: number, _name: string, _description: string, _starttime: string, _endtime: string) {
        this._id = _id;
        this._name = _name;
        this._description = _description;
        this._starttime = _starttime;
        this._endtime = _endtime;
    }

     get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;

    }

     get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;

    }

     get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;

    }

     get starttime(): string {
        return this._starttime;
    }

    set starttime(starttime: string) {
        this._starttime = starttime;

    }

     get endtime(): string {
        return this._endtime;
    }

    set endtime(endtime: string) {
        this._endtime = endtime;

    }

   

}


class Venue {
    private _id: number;
    private _name: string;
    private _description: string;
    private _address: string;

    constructor(_id: number, _name: string, _description: string, address: string) {
        this._id = _id;
        this._name = _name;
        this._description = _description;
        this._address = address;
    }

     get id(): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;

    }

     get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;

    }

     get description(): string {
        return this._description;
    }

    set description(description: string) {
        this._description = description;

    }

    
     get address(): string {
        return this._address;
    }

    set address(address: string) {
        this._address = address;

    }

}

var organizer = new Organizer(1, "Sanjay");
organizer.name = "Rajesh";
var events = new Events(1, "Ajay", "Marriage", "10:00 AM", "3:00 PM");
events.endtime = "4:00 PM"
var venue = new Venue(1, "Palace", "Marriage Palace", "Suburb");

console.log("id: "+organizer.id);
console.log("name: "+organizer.name);

console.log("id: "+events.id);
console.log("name: "+events.name);
console.log("description: "+events.description);
console.log("srarttime: "+events.starttime);
console.log("endtime: "+events.endtime);


console.log("id: "+venue.id);
console.log("name: "+venue.name);
console.log("description: "+venue.description);
console.log("address: "+venue.address);

