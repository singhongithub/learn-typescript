class Organizer {
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log("id: " + this.id);
        console.log("name: " + this.name);

    }

}

class Events {
    id: number;
    name: string;
    description: string;
    srarttime: string;
    endtime: string;

    constructor(id: number, name: string, description: string, srarttime: string, endtime: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.srarttime = srarttime;
        this.endtime = endtime;
    }

    display() {
        console.log("id: " + this.id);
        console.log("name: " + this.name);
        console.log("description: " + this.description);
        console.log("srarttime: " + this.srarttime);
        console.log("endtime: " + this.endtime);

    }

}


class Venue {
    id: number;
    name: string;
    description: string;
    address: string;

    constructor(id: number, name: string, description: string, address: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.address = address;
    }

    display() {
        console.log("id: " + this.id);
        console.log("name: " + this.name);
        console.log("description: " + this.description);
        console.log("address: " + this.address);

    }

}

var organizer = new Organizer(1, "Sanjay");
var events = new Events(1, "Ajay", "Marriage", "10:00 AM", "3:00 PM");
var venue = new Venue(1, "Palace", "Marriage Palace", "Suburb");

organizer.display();
events.display();
venue.display();

