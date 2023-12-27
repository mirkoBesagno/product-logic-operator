import { flattenArray, FunzioneConfronto, howToHandleError, logicOperator, messageErrore, operator, SwitchConfronto, SwitchSceltaGestioneErrore } from "./utility";

export type parametriAnd = { variableToCompare: any | Array<any | logicOperator>, params?: operator, howToHandleError?: howToHandleError };

export type returnAnd = (...comparisonVariables: any) => boolean;

export class ParametriAnd {
    item: parametriAnd;
    constructor(item: parametriAnd) {
        this.item = item;
    }
}
/**
 * 
 * @param variableToCompare : AA
 * @param params :BB
 * @param howToHandleError :CC
 * @returns :true o false
 */
export const and = function (variableToCompare: any | Array<any | logicOperator>, params?: operator, howToHandleError?: howToHandleError):
    (...comparisonVariables: any) => boolean | Error {
    if (params == undefined) {
        params = '==';
    }
    return function (...comparisonVariables: any): boolean | Error {
        /* if (comparisonVariables instanceof Array) {
          if (comparisonVariables.length == 1 && comparisonVariables[0] instanceof ParametriAnd) {
               return and(comparisonVariables);
           }
       } */
        if (variableToCompare instanceof Array) {
            const risultarto = FunzioneConfronto(AND, '&&', params, howToHandleError ?? 'error', comparisonVariables, variableToCompare);
            return risultarto;
        }
        else {
            return AND(variableToCompare, params, howToHandleError ?? 'error', comparisonVariables);
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
function AND(variableToCompare: any, params: any, howToHandleError: howToHandleError, comparisonVariables: any): boolean | Error {
    const comparisonVariablesFlat = flattenArray(comparisonVariables);
    for (const y of comparisonVariablesFlat) {
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