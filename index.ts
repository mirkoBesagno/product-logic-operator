

type operator = '<' | '>' | '==' | '<=' | '>=' | '!=';

type howToHandleError = 'error' | 'try' | 'return' | "skip";


export const or = function (variabiliConfrontabile: any, params: operator, howToHandleError?: howToHandleError) {
    return function (...variabiliDaConfrontare: any) {
        for (const y of variabiliDaConfrontare) {
            var salta = false;
            var tmpY = y;
            if (typeof y == 'function') {
                tmpY = y();
            }
            var tmpVariabiliConfrontabile = variabiliConfrontabile;
            if(typeof variabiliConfrontabile == 'function') {
                tmpVariabiliConfrontabile = variabiliConfrontabile();
            }
            if (typeof tmpVariabiliConfrontabile != typeof tmpY) {
                if (howToHandleError == 'error' || howToHandleError == undefined) {
                    throw new Error("Attenzione tipi differenti");
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
export const and = function (variabiliConfrontabile: any, params: operator, howToHandleError?: howToHandleError) {
    return function (...variabiliDaConfrontare: any) {
        for (const y of variabiliDaConfrontare) {
            var salta = false;
            var tmpY = y;
            if (typeof y == 'function') {
                tmpY = y();
            }
            var tmpVariabiliConfrontabile = variabiliConfrontabile;
            if(typeof variabiliConfrontabile == 'function') {
                tmpVariabiliConfrontabile = variabiliConfrontabile();
            }
            if (typeof tmpVariabiliConfrontabile != typeof tmpY) {
                if (howToHandleError == 'error' || howToHandleError == undefined) {
                    throw new Error("Attenzione tipi differenti");
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
try {

    const tmp = or(() => { return 'ciao'; }, '==')('kk', () => { return 'ciao'; }, 'hahaha');
    console.log(tmp);

    console.log('');


} catch (error) {
    console.log(error);

}
