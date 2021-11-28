"use strict";
// zad 5,6,7
exports.__esModule = true;
var zad5_mod_1 = require("./zad5_mod");
var a = [
    new zad5_mod_1.Car("BMW", "SBX1234"),
    new zad5_mod_1.Car("FIAT", "SBA3210"),
    new zad5_mod_1.Car("AUDI", "SBZ3333"),
    new zad5_mod_1.Truck("MAN", "TR03123", "proffesional"),
];
a.forEach(function (x) { return console.log(x.opis()); });
