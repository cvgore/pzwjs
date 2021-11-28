"use strict";
// zad 5,6,7
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(brand, plate) {
        this.brand = brand;
        this.plate = plate;
    }
    Car.prototype.opis = function () {
        return this.brand + ' - ' + this.plate;
    };
    return Car;
}());
exports.Car = Car;
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, plate, trailer) {
        var _this = _super.call(this, brand, plate) || this;
        _this.trailer = trailer;
        return _this;
    }
    return Truck;
}(Car));
exports.Truck = Truck;
