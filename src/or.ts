import { howToHandleError, messageErrore, operator, SwitchConfronto } from "./utility";




export const or = function (variableToCompare?: any | Array<any>,
    params?: operator | ((x: any) => boolean), howToHandleError?: howToHandleError) {
    if (params == undefined) params == '==';
    return function (...comparisonVariables: any) {
        if (variableToCompare instanceof Array) {
            for (const item of variableToCompare) {
                var ritorno = OR(item, params, howToHandleError, comparisonVariables);
                if (ritorno == true) {
                    return true;
                }
            }
            return false;
        }
        else {
            return OR(variableToCompare, params, howToHandleError, comparisonVariables);
        }
    }
};
function OR(variableToCompare: any, params: any, howToHandleError: any, comparisonVariables: any) {
    try {
        for (const y of comparisonVariables) {
            var salta = false;
            var tmpY;
            var tmpVariabiliConfrontabile;
            if (typeof y == 'function') {
                tmpY = y();
            }
            else {
                tmpY = y;
            }
            if (typeof variableToCompare == 'function') {
                tmpVariabiliConfrontabile = variableToCompare();
            }
            else {
                tmpVariabiliConfrontabile = variableToCompare;
            }
            if (typeof tmpVariabiliConfrontabile != typeof tmpY && tmpVariabiliConfrontabile != undefined) {
                if (howToHandleError == 'error' || howToHandleError == undefined) {
                    throw new Error(messageErrore);
                }
                else if (howToHandleError == 'return') {
                    return false;
                } else if (howToHandleError == 'skip') {
                    salta = true;
                }
                else if (howToHandleError == 'try') {
                    salta = false;
                }
            }
            if (salta == false) {
                const tmp = SwitchConfronto(params, tmpVariabiliConfrontabile, tmpY);
                if (tmp) return true;
            }
        }
    } catch (error) {
        console.log(error);
    }
    return false;
}