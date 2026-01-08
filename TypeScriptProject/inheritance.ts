class TouchScreenLaptop {
    ram: string;
    processor: number;

    constructor(ram: string, processor: number) {
        this.ram = ram;
        this.processor = processor;
    }


    scroll() {
        console.log("Scrolling page..");
    }

    click() {
        console.log("Clicking buttons..");
    }

}

class HpLaptop extends TouchScreenLaptop {
    selfRecovery: boolean;

    constructor(ram: string, processor: number, selfRecovery: boolean) {

        super(ram, processor);

        this.selfRecovery = selfRecovery;
    }

    scroll() {
        console.log("natural scrolling...")
    }

    display() {
        console.log("ram: " + this.ram);
        console.log("processor: " + this.processor);
        console.log("selfRecovery: " + this.selfRecovery);
    }

}

class DellLaptop extends TouchScreenLaptop {
    mobileAccess: boolean;

    constructor(ram: string, processor: number, mobileAccess: boolean) {

        super(ram, processor);

        this.mobileAccess = mobileAccess;
    }

    scroll() {
        console.log("reverse scrolling...")
    }

    display() {
        console.log("ram: " + this.ram);
        console.log("processor: " + this.processor);
        console.log("mobileAccess: " + this.mobileAccess);
    }


}

var hpLaptop = new HpLaptop("8gb",2.5, true);
hpLaptop.click();
hpLaptop.scroll();
hpLaptop.display();

var dellLaptop = new DellLaptop("16gb",3.5, false);
dellLaptop.click();
dellLaptop.scroll();
dellLaptop.display();