"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var xwing = {
    name: "x",
    pilot: "luke",
    speed: 50,
    weapons: 4,
};
console.log(_.camelCase(xwing.pilot));
