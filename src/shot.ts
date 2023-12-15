

import { howToHandleError, messageErrore, operator, SwitchConfronto, SwitchSceltaGestioneErrore } from "./utility";


/**
 * 
 * @param variableToCompare : AA
 * @param params :BB
 * @param howToHandleError :CC
 * @returns :true o false
 */
export const shot = function (item: Function | any) {
    debugger;
    try {
        let tmp;
        if (typeof item == 'function') {
            tmp = item();
        } else {
            tmp = item;
        }
        return tmp;
    } catch (error) {
        //return error;
    }
};
