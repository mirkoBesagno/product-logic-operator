

export type operator = '<' | '>' | '==' | '<=' | '>=' | '!=' | ((x: any, y: any) => boolean);

export type logicOperator = 'and' | 'or' | 'not' | '&' | '|' | '!';

/**
 * @enum: 'error' : solleva un'eccezione qualora i tipi di dato da confrontare non siano uguali.
 * @enum: 'try' : prova la comparazione
 * @enum: 'return' : ritorna flso se i tipi sono differenti
 * @enum: 'skip' : evita il confronto se i tipi sono differenti
 * @enum: 'convert' : prova la comparazione ma prima prova a convertire a un valore comune
 */
export type howToHandleError = 'error' | 'try' | 'return' | "skip" | "convert";

export const messageErrore = "Error: different types"; // Errore: tipi differenti

export function SwitchConfronto(params: operator | ((x: any) => boolean) | undefined, tmpVariabiliConfrontabile: any, tmpY: any): any {
    switch (params) {
        case '==':
            if (typeof tmpVariabiliConfrontabile == 'object') {
                if (JSON.stringify(tmpVariabiliConfrontabile) === JSON.stringify(tmpY)) {
                    return true;
                }
            } else {
                if (tmpVariabiliConfrontabile == tmpY) {
                    return true;
                }
            }
            break;
        case "!=":
            if (typeof tmpVariabiliConfrontabile == 'object') {
                if (JSON.stringify(tmpVariabiliConfrontabile) !== JSON.stringify(tmpY)) {
                    return true;
                }
            } else {
                if (tmpVariabiliConfrontabile != tmpY) {
                    return true;
                }
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
                if (params(tmpY, tmpVariabiliConfrontabile) == true) {
                    return true;
                }
            }
            break;
    }
    return false;
};


/**
 * 
 * @param howToHandleError 
 * @param variabileOriginale 
 * @param variabiliConfrontabile 
 * @returns oggetto che puo contenere: 
 * - Error()
 * - return false; #interrupt#
 * - salta : true / false
 * - tmpY: valorizzata / undefined
 */
export function SwitchSceltaGestioneErrore(howToHandleError: howToHandleError, variabileOriginale: any, variabiliConfrontabile: any): any {
    var salta = false;
    var tmpY: any;
    if (howToHandleError == 'error' || howToHandleError == undefined) {
        return {
            errore: messageErrore,
            interrupt: undefined,
            salta: undefined,
            tmpY: undefined
        };
    }
    else if (howToHandleError == 'return') {
        return {
            errore: undefined,
            interrupt: false,
            salta: undefined,
            tmpY: undefined
        };
    } else if (howToHandleError == 'skip') {
        salta = true;
    }
    else if (howToHandleError == 'try') {
        salta = false;
    }
    else if (howToHandleError == 'convert') {
        salta = false;
        if (typeof variabiliConfrontabile == 'bigint' || typeof variabiliConfrontabile == 'number') {
            tmpY = Number(variabileOriginale);
        }
        else if (typeof variabiliConfrontabile == 'boolean') {
            try {
                tmpY = JSON.parse(variabileOriginale);//Boolean(y);
            } catch (error) {
                console.log(error);
            }
        }
        else if (typeof variabiliConfrontabile == 'string') {
            tmpY = String(variabileOriginale);
        }
        else if (typeof variabiliConfrontabile == 'symbol') {
            tmpY = Symbol(variabileOriginale);
        }
        else if (typeof variabiliConfrontabile == 'function') {
            tmpY = Function(variabileOriginale);
        }
        else if (typeof variabiliConfrontabile == 'object') {
            tmpY = Object(variabileOriginale);
        } else {
            tmpY = tmpY;
        }
    }

    return {
        errore: undefined,
        interrupt: undefined,
        salta: salta,
        tmpY: tmpY
    };
}


export function FunzioneConfronto(funzioneDaEseguire: Function, simbolo: '&&' | '||', params: any, howToHandleError: any,
    comparisonVariables: any, variableToCompare: any,) {
    let risultatoString = '';
    let index = 0;
    for (const item of variableToCompare) {
        let operatore = '';
        try {
            switch (item) {
                case 'and':
                case '&':
                    operatore = ' && ';
                    break;
                case 'or':
                case '|':
                    operatore = ' || ';
                    break;
                case 'not':
                case '!':
                    operatore = ' !';
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.log(error);
        }
        if (operatore == '') {
            var ritorno = funzioneDaEseguire(item, params, howToHandleError, comparisonVariables);
            if (index == 0) {
                risultatoString = risultatoString + ritorno;
            } else {
                risultatoString = risultatoString + ' ' + simbolo + ' ' + ritorno;
            }
            index++;
        } else {
            risultatoString = risultatoString + " " + operatore + ' ';
            index = 0;
        }
    }
    const result = eval(risultatoString);
    return result;
}


export function flattenArray(arr: any) {
    let result: any = [];

    arr.forEach((item: any) => {
        if (Array.isArray(item)) {
            // Se l'elemento è un array, richiama ricorsivamente la funzione flattenArray
            result = result.concat(flattenArray(item));
        } else {
            // Se l'elemento non è un array, aggiungilo al risultato
            result.push(item);
        }
    });

    return result;
}