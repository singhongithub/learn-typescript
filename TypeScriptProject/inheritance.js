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
var TouchScreenLaptop = /** @class */ (function () {
    function TouchScreenLaptop(ram, processor) {
        this.ram = ram;
        this.processor = processor;
    }
    TouchScreenLaptop.prototype.scroll = function () {
        console.log("Scrolling page..");
    };
    TouchScreenLaptop.prototype.click = function () {
        console.log("Clicking buttons..");
    };
    return TouchScreenLaptop;
}());
var HpLaptop = /** @class */ (function (_super) {
    __extends(HpLaptop, _super);
    function HpLaptop(ram, processor, selfRecovery) {
        var _this = _super.call(this, ram, processor) || this;
        _this.selfRecovery = selfRecovery;
        return _this;
    }
    HpLaptop.prototype.scroll = function () {
        console.log("natural scrolling...");
    };
    HpLaptop.prototype.display = function () {
        console.log("ram: " + this.ram);
        console.log("processor: " + this.processor);
        console.log("selfRecovery: " + this.selfRecovery);
    };
    return HpLaptop;
}(TouchScreenLaptop));
var DellLaptop = /** @class */ (function (_super) {
    __extends(DellLaptop, _super);
    function DellLaptop(ram, processor, mobileAccess) {
        var _this = _super.call(this, ram, processor) || this;
        _this.mobileAccess = mobileAccess;
        return _this;
    }
    DellLaptop.prototype.scroll = function () {
        console.log("reverse scrolling...");
    };
    DellLaptop.prototype.display = function () {
        console.log("ram: " + this.ram);
        console.log("processor: " + this.processor);
        console.log("mobileAccess: " + this.mobileAccess);
    };
    return DellLaptop;
}(TouchScreenLaptop));
var hpLaptop = new HpLaptop("8gb", 2.5, true);
hpLaptop.click();
hpLaptop.scroll();
hpLaptop.display();
var dellLaptop = new DellLaptop("16gb", 3.5, false);
dellLaptop.click();
dellLaptop.scroll();
dellLaptop.display();
