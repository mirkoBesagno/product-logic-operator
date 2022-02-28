"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
try {
    var tmp = (0, _1.or)(function () { return 'ciao'; }, '==')('kk', function () { return 'ciao'; }, 'hahaha');
    console.log(tmp);
    console.log('');
}
catch (error) {
    console.log(error);
}
