

type operator = '<' | '>' | '==' | '<=' | '>=' | '!=';

type howToHandleError = 'error' | 'try' | 'return' | "skip";

const messageErrore = "Error: different types"; // Errore: tipi differenti

export const or = function (variableToCompare: any, params: operator, howToHandleError?: howToHandleError) {
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
            if (typeof tmpVariabiliConfrontabile != typeof tmpY) {
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
    }
};
export const and = function (variableToCompare: any, params: operator, howToHandleError?: howToHandleError) {
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
            if (typeof tmpVariabiliConfrontabile != typeof tmpY) {
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
    }
};


