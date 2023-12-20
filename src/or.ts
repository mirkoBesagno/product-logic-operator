import { flattenArray, FunzioneConfronto, howToHandleError, logicOperator, messageErrore, operator, SwitchConfronto, SwitchSceltaGestioneErrore } from "./utility";




export const or = function (variableToCompare: any | Array<any | logicOperator>, params?: operator, howToHandleError?: howToHandleError): any {
    if (params == undefined) params = '==';
    return function (...comparisonVariables: any) {
        if (variableToCompare instanceof Array) {
            const risultarto = FunzioneConfronto(OR, '||', params, howToHandleError ?? 'error', comparisonVariables, variableToCompare);
            return risultarto;
        }
        else {
            return OR(variableToCompare, params, howToHandleError ?? 'error', comparisonVariables);
        }
    }
};

function OR(variableToCompare: any, params: any, howToHandleError: any, comparisonVariables: any) {
    const comparisonVariablesFlat = flattenArray(comparisonVariables);
    try {
        for (const y of comparisonVariablesFlat) {
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