import { flattenArray, FunzioneConfronto, howToHandleError, logicOperator, messageErrore, operator, SwitchConfronto, SwitchSceltaGestioneErrore } from "./utility";




export const assign = function (variableToCompare: any | Array<any | logicOperator>, howToHandleError?: howToHandleError): (...comparisonVariables: any) => any | Error {

    return function (...comparisonVariables: any): any | Error {
        if (variableToCompare instanceof Array) {
            let ritorno = [];
            for (const y of variableToCompare) {
                ritorno.push(ASSIGN(y, howToHandleError ?? 'error', comparisonVariables));
            }
            return ritorno;
        }
        else {
            return ASSIGN(variableToCompare, howToHandleError ?? 'error', comparisonVariables);
        }
    }
};

function ASSIGN(variableToCompare: any, howToHandleError: any, comparisonVariables: any): any | any[] | Error {
    const comparisonVariablesFlat = flattenArray(comparisonVariables);
    let ritorno: any[] = [];
    try {
        for (const y of comparisonVariablesFlat) {
            if (typeof y == 'object') {
                if (typeof variableToCompare == 'object') {
                    Object.assign({}, y, variableToCompare);
                }
                else if (typeof variableToCompare == 'function') {
                    Object.assign({}, y, { variableToCompare });
                } else if (typeof variableToCompare == 'bigint' || typeof variableToCompare == 'boolean'
                    || typeof variableToCompare == 'number' || typeof variableToCompare == 'string'
                    || typeof variableToCompare == 'symbol') {
                    Object.assign({}, y, { variableToCompare });
                }
                else {
                    Object.assign({}, y, {});
                }
            }
            else {
                ritorno.push(variableToCompare);
            }
        }
        return ritorno;
    } catch (error) {
        console.log(error);
    }
    return false;
}