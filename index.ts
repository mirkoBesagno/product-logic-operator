

type operator = '<' | '>' | '==' | '<=' | '>=' | '!=';

export const or = function (variabiliConfrontabile: any, params: operator) {
    return function (...variabiliDaConfrontare: any) {
        for (const y of variabiliDaConfrontare) {
            switch (params) {
                case '==':
                    if (variabiliConfrontabile == y) {
                        return true;
                    }
                    break;
                case "!=":
                    if (variabiliConfrontabile != y) {
                        return true;
                    }
                    break;
                case "<":
                    break;
                    if (variabiliConfrontabile < y) {
                        return true;
                    }
                case "<=":
                    if (variabiliConfrontabile <= y) {
                        return true;
                    }
                    break;
                case ">":
                    if (variabiliConfrontabile > y) {
                        return true;
                    }
                    break;
                case ">=":
                    if (variabiliConfrontabile >= y) {
                        return true;
                    }
                    break;
                default:
                    break;
            }
        }
        return false;
    }
};
export const and = function (variabiliConfrontabile: any, params: operator) {
    return function (...variabiliDaConfrontare: any) {
        for (const y of variabiliDaConfrontare) {
            switch (params) {
                case '==':
                    if (!(variabiliConfrontabile == y)) {
                        return false;
                    }
                    break;
                case "!=":
                    if (!(variabiliConfrontabile != y)) {
                        return false;
                    }
                    break;
                case "<":
                    if (!(variabiliConfrontabile < y)) {
                        return false;
                    }
                    break;
                case "<=":
                    if (!(variabiliConfrontabile <= y)) {
                        return false;
                    }
                    break;
                case ">":
                    if (!(variabiliConfrontabile > y)) {
                        return false;
                    }
                    break;
                case ">=":
                    if (!(variabiliConfrontabile >= y)) {
                        return false;
                    }
                    break;
                default:
                    break;
            }
        }
        return true;
    }
};
/* console.log( or(true, '==')( false, false, false ));

console.log(''); */


