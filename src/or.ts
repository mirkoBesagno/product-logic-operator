import { howToHandleError, messageErrore, operator, SwitchConfronto, SwitchSceltaGestioneErrore } from "./utility";




export const or = function (variableToCompare?: any | Array<any>, params?: operator, howToHandleError?: howToHandleError) {
    if (params == undefined) params = '==';
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
                const tmp = SwitchSceltaGestioneErrore(howToHandleError, y, tmpVariabiliConfrontabile);
                if (tmp.errore) {
                    throw new Error(tmp.errore);
                } else if (tmp.interrupt) {
                    return tmp.interrupt;
                } else {
                    salta = tmp.salta ?? false;
                    tmpY = tmp.tmpY;
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