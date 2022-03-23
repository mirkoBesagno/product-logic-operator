

export type operator = '<' | '>' | '==' | '<=' | '>=' | '!=';

export type howToHandleError = 'error' | 'try' | 'return' | "skip";

export const messageErrore = "Error: different types"; // Errore: tipi differenti

export function SwitchConfronto(params: operator | ((x: any) => boolean) | undefined,
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