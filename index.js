"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.and = exports.or = void 0;
var messageErrore = "Error: different types"; // Errore: tipi differenti
var or = function (variableToCompare, params, howToHandleError) {
    return function () {
        var comparisonVariables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            comparisonVariables[_i] = arguments[_i];
        }
        for (var _a = 0, comparisonVariables_1 = comparisonVariables; _a < comparisonVariables_1.length; _a++) {
            var y = comparisonVariables_1[_a];
            var salta = false;
            var tmpY = y;
            if (typeof y == 'function') {
                tmpY = y();
            }
            var tmpVariabiliConfrontabile = variableToCompare;
            if (typeof variableToCompare == 'function') {
                tmpVariabiliConfrontabile = variableToCompare();
            }
            if (typeof tmpVariabiliConfrontabile != typeof tmpY) {
                if (howToHandleError == 'error' || howToHandleError == undefined) {
                    throw new Error(messageErrore);
                }
                else if (howToHandleError == 'return') {
                    return false;
                }
                else if (howToHandleError == 'skip') {
                    salta = true;
                }
                else if (howToHandleError == 'try') {
                    salta = false;
                }
            }
            if (salta == false) {
                switch (params) {
                    case '==':
                        if (tmpVariabiliConfrontabile == tmpY) {
                            return true;
                        }
                        break;
                    case "!=":
                        if (tmpVariabiliConfrontabile != tmpY) {
                            return true;
                        }
                        break;
                    case "<":
                        if (tmpVariabiliConfrontabile < tmpY) {
                            return true;
                        }
                        break;
                    case "<=":
                        if (tmpVariabiliConfrontabile <= tmpY) {
                            return true;
                        }
                        break;
                    case ">":
                        if (tmpVariabiliConfrontabile > tmpY) {
                            return true;
                        }
                        break;
                    case ">=":
                        if (tmpVariabiliConfrontabile >= tmpY) {
                            return true;
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        return false;
    };
};
exports.or = or;
var and = function (variableToCompare, params, howToHandleError) {
    return function () {
        var comparisonVariables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            comparisonVariables[_i] = arguments[_i];
        }
        for (var _a = 0, comparisonVariables_2 = comparisonVariables; _a < comparisonVariables_2.length; _a++) {
            var y = comparisonVariables_2[_a];
            var salta = false;
            var tmpY = y;
            if (typeof y == 'function') {
                tmpY = y();
            }
            var tmpVariabiliConfrontabile = variableToCompare;
            if (typeof variableToCompare == 'function') {
                tmpVariabiliConfrontabile = variableToCompare();
            }
            if (typeof tmpVariabiliConfrontabile != typeof tmpY) {
                if (howToHandleError == 'error' || howToHandleError == undefined) {
                    throw new Error(messageErrore);
                }
                else if (howToHandleError == 'return') {
                    return false;
                }
                else if (howToHandleError == 'skip') {
                    salta = true;
                }
                else if (howToHandleError == 'try') {
                    salta = false;
                }
            }
            if (salta == false) {
                switch (params) {
                    case '==':
                        if (!(tmpVariabiliConfrontabile == tmpY)) {
                            return false;
                        }
                        break;
                    case "!=":
                        if (!(tmpVariabiliConfrontabile != tmpY)) {
                            return false;
                        }
                        break;
                    case "<":
                        if (!(tmpVariabiliConfrontabile < tmpY)) {
                            return false;
                        }
                        break;
                    case "<=":
                        if (!(tmpVariabiliConfrontabile <= tmpY)) {
                            return false;
                        }
                        break;
                    case ">":
                        if (!(tmpVariabiliConfrontabile > tmpY)) {
                            return false;
                        }
                        break;
                    case ">=":
                        if (!(tmpVariabiliConfrontabile >= tmpY)) {
                            return false;
                        }
                        break;
                    default:
                        break;
                }
            }
        }
        return true;
    };
};
exports.and = and;
