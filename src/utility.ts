

export type operator = '<' | '>' | '==' | '<=' | '>=' | '!=';

export type howToHandleError = 'error' | 'try' | 'return' | "skip";

export const messageErrore = "Error: different types"; // Errore: tipi differenti

export function SwitchConfronto(params: operator | ((x: any) => boolean) | undefined, tmpVariabiliConfrontabile: any, tmpY: any) {
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
};