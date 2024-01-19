import { flattenArray, FunzioneConfronto, howToHandleError, logicOperator, messageErrore, operator, SwitchConfronto, SwitchSceltaGestioneErrore } from "../lib/utility";




export const assign = function (variableToCompare: any | Array<any | logicOperator>, howToHandleError?: howToHandleError): (...factorsVariables: any) => any | Error {
    return function (...factorsVariables: any): any | Array<any> | Error {
        if (variableToCompare instanceof Array) {
            let ritorno = [];
            for (const y of variableToCompare) {
                ritorno.push(_assign(y, howToHandleError ?? 'error', factorsVariables));
            }
            return ritorno;
        }
        else {
            const tmp = _assign(variableToCompare, howToHandleError ?? 'error', factorsVariables);
            if (variableToCompare instanceof Array) {
                return tmp;
            }
            return tmp[0];
        }
    }
};

export function ASSIGN(variableToCompare: any, howToHandleError: any, factorsVariables: any) {
    if (variableToCompare instanceof Array) {
        let ritorno = [];
        for (const y of variableToCompare) {
            ritorno.push(_assign(y, howToHandleError ?? 'error', factorsVariables));
        }
        return ritorno;
    }
    else {
        const tmp = _assign(variableToCompare, howToHandleError ?? 'error', factorsVariables);
        if (variableToCompare instanceof Array) {
            return tmp;
        }
        return tmp[0];
    }
}

function _assign(variableToCompare: any, howToHandleError: any, factorsVariables: any): any | Array<any> | Error {
    const factorsVariablesFlat = flattenArray(factorsVariables);
    let ritorno: any[] = [];
    try {
        for (var y of factorsVariablesFlat) {
            var salta = false;
            var tmpY = y;
            var tmp;
            if (typeof variableToCompare != typeof tmpY && tmpY != undefined) {
                tmp = SwitchSceltaGestioneErrore(howToHandleError, tmpY, variableToCompare);
                if (tmp.errore) {
                    throw new Error(tmp.errore);
                } else if (tmp.interrupt) {
                    return tmp.interrupt;
                } else {
                    salta = tmp.salta ?? false;
                    tmpY = tmp.result;
                }
            }

            if (salta == false) {
                try {
                    if (typeof tmpY == 'object') {
                        if (typeof variableToCompare == 'object') {
                            ritorno = Object.assign({}, tmpY, variableToCompare);
                        }
                        else if (typeof variableToCompare == 'function') {
                            ritorno = Object.assign({}, tmpY, { variableToCompare });
                        } else if (typeof variableToCompare == 'bigint' || typeof variableToCompare == 'boolean'
                            || typeof variableToCompare == 'number' || typeof variableToCompare == 'string'
                            || typeof variableToCompare == 'symbol') {
                            ritorno = Object.assign({}, tmpY, { variableToCompare });
                        }
                        else {
                            ritorno = Object.assign({}, tmpY, {});
                        }
                    }
                    else {
                        factorsVariables = variableToCompare;
                        y = variableToCompare;
                        tmpY = variableToCompare;

                        ritorno.push(variableToCompare);

                        variableToCompare = 'fiffone';
                    }
                } catch (error) {
                    console.log(error);
                    if (tmp.errore) {
                        throw error;
                    } else if (tmp.interrupt) {
                        return tmp.interrupt;
                    }
                }
            }

        }
        return ritorno;
    } catch (error) {
        console.log(error);
    }
    return false;
}