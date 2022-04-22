import { howToHandleError, messageErrore, operator, SwitchConfronto } from "./utility";



export const and = function (variableToCompare: any | Array<any>, params?: operator | ((x: any) => boolean), 
howToHandleError?: howToHandleError) {
    if (params == undefined) params == '==';
    return function (...comparisonVariables: any) {
        if (variableToCompare instanceof Array) {
            for (const item of variableToCompare) {
                var ritorno = AND(item, params, howToHandleError, comparisonVariables);
                if (ritorno == false) {
                    return false;
                }
            }
            return true;
        }
        else {
            return AND(variableToCompare, params, howToHandleError, comparisonVariables);
        }
    }
};

function AND(variableToCompare: any, params: any, howToHandleError: any, comparisonVariables: any){
     for (const y of comparisonVariables) {
            var salta = false;
            var tmpY = y;
            if (typeof y == 'function') {
                tmpY = y();
            }
            var tmpVariabiliConfrontabile = variableToCompare;
            if (typeof variableToCompare == 'function') {
                tmpVariabiliConfrontabile = variableToCompare();
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
                if (!tmp) return false;
            }
        }
        return true;
}