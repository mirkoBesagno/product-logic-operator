import { howToHandleError, messageErrore, operator, SwitchConfronto, SwitchSceltaGestioneErrore } from "../lib/utility";


/**
 * 
 * @param variableToCompare : AA
 * @param params :BB
 * @param howToHandleError :CC
 * @returns :true o false
 */
const by = function (variableToCompare: any | Array<any>, params?: operator, howToHandleError?: howToHandleError) {
    if (params == undefined) params = '==';
    return function (...comparisonVariables: any) {
        if (variableToCompare instanceof Array) {
            for (const item of variableToCompare) {
                var ritorno = BY(item, params, howToHandleError ?? 'error', comparisonVariables);
                if (ritorno == false) {
                    return false;
                }
            }
            return true;
        }
        else {
            return BY(variableToCompare, params, howToHandleError ?? 'error', comparisonVariables);
        }
    }
};

/**
 * 
 * @param variableToCompare : AA
 * @param params :BB
 * @param howToHandleError :CC
 * @returns :true o false
 */
function BY(variableToCompare: any, params: any, howToHandleError: howToHandleError, comparisonVariables: any) {
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
            if (!tmp) {
                return false;
            }
        }
    }
    return true;
}