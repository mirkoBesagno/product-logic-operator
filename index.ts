

export type operator = '<' | '>' | '==' | '<=' | '>=' | '!=';

export type howToHandleError = 'error' | 'try' | 'return' | "skip";


const messageErrore = "Error: different types"; // Errore: tipi differenti

export const or = function (variableToCompare?: any, params?: operator | ((x: any) => boolean), howToHandleError?: howToHandleError) {
    if (params == undefined) params == '==';
    return function (...comparisonVariables: any) {
        try {
            for (const y of comparisonVariables) {
                var salta = false;
                var tmpY = y;
                var tmpVariabiliConfrontabile = variableToCompare;
                if (typeof y == 'function') {
                    tmpY = y();
                }
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
                    if (tmp) return true;
                    /*  switch (params) {
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
                             if (params) {
                                 if (params(tmpY) == true) {
                                     return true;
                                 }
                             }
                             break;
                     } */
                }
            }
        } catch (error) {
            console.log(error);
        }
        return false;
    }
};
export const and = function (variableToCompare: any, params?: operator | ((x: any) => boolean), howToHandleError?: howToHandleError) {
    if (params == undefined) params == '==';
    return function (...comparisonVariables: any) {
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
                /* switch (params) {
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
                        if (params) {
                            if (params(tmpY) == true) {
                                return true;
                            }
                        }
                        break;
                } */
            }
        }
        return true;
    }
};

function Decisione(y: any, variableToCompare: any, howToHandleError?: howToHandleError) {
    var tmpY: any;
    var salta = false;
    var esci = false;
    var tmpVariabiliConfrontabile = variableToCompare;
    if (typeof y == 'function') {
        tmpY = y();
    }
    if (typeof variableToCompare == 'function') {
        tmpVariabiliConfrontabile = variableToCompare();
    }
    if (typeof tmpVariabiliConfrontabile != typeof tmpY) {
        if (howToHandleError == 'error' || howToHandleError == undefined) {
            throw new Error(messageErrore);
        }
        else if (howToHandleError == 'return') {
            esci = true;//return false;
        } else if (howToHandleError == 'skip') {
            salta = true;
        }
        else if (howToHandleError == 'try') {
            salta = false;
        }
    }
    return {
        salta: salta,
        esci: esci,
        y: tmpY,
        variableToCompare: tmpVariabiliConfrontabile
    };
}

function SwitchConfronto(params: operator | ((x: any) => boolean) | undefined,
    tmpVariabiliConfrontabile: any,
    tmpY: any) {
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
            if (params) {
                if (params(tmpY) == true) {
                    return true;
                }
            }
            break;
    }
    return false;
}
