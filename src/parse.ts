



/**
 * 
 * @param tipo 
 * @param oggetto 
 * @returns 
 */
export function parse(tipo: any | 'bigint' | 'number' | 'boolean' | 'string' | 'symbol', oggetto: any):any|Error {
    try {

        if (typeof tipo == 'function') {

            if (tipo as 'name' && oggetto as 'name' && tipo.name == oggetto.name) {
                return oggetto;
            } else if (tipo as 'name') {

                if (String(tipo.name).toLowerCase() == typeof oggetto) {
                    return oggetto;
                } else {
                    let tmpY: any = oggetto;
                    if (String(tipo.name).toLowerCase() == 'bigint' || String(tipo.name).toLowerCase() == 'number') {
                        if (typeof oggetto == 'bigint' || typeof oggetto == 'number') {
                            tmpY = oggetto;
                        } else {
                            tmpY = Number(oggetto);
                        }
                    } else if (String(tipo.name).toLowerCase() == 'boolean') {

                        if (typeof oggetto == 'boolean') {
                            tmpY = oggetto;
                        } else {
                            try {

                                tmpY = JSON.parse(oggetto);


                                if (typeof tmpY !== 'boolean') {
                                    throw new Error('Il valore non è un booleano valido.');
                                }
                            } catch (error) {
                                console.log(error);
                            }
                        }
                    } else if (String(tipo.name).toLowerCase() == 'string') {

                        if (typeof oggetto == 'string') {
                            tmpY = oggetto;
                        } else {
                            tmpY = String(oggetto);
                        }
                    } else if (String(tipo.name).toLowerCase() == 'symbol') {

                        if (typeof oggetto == 'symbol') {
                            tmpY = oggetto;
                        } else {
                            tmpY = Symbol(oggetto);
                        }
                    }
                    if (typeof tmpY == String(tipo.name).toLowerCase()) {
                        return tmpY
                    }
                    else {

                        throw new Error("I, Errore di conversione");
                    }
                }
            }
        } else if (typeof tipo == typeof oggetto) {

            return oggetto;
        } else if (typeof tipo == 'string') {
            let tmpY: any = oggetto;

            if (String(tipo).toLowerCase() == 'bigint' || String(tipo).toLowerCase() == 'number') {
                if (typeof oggetto == 'bigint' || typeof oggetto == 'number') {
                    tmpY = oggetto;
                } else {
                    tmpY = Number(oggetto);
                }
            } else if (String(tipo).toLowerCase() == 'boolean') {

                if (typeof oggetto == 'boolean') {
                    tmpY = oggetto;
                } else {
                    try {

                        tmpY = JSON.parse(oggetto);


                        if (typeof tmpY !== 'boolean') {
                            throw new Error('Il valore non è un booleano valido.');
                        }
                    } catch (error) {
                        console.log(error);
                    }
                }
            } else if (String(tipo).toLowerCase() == 'string') {

                if (typeof oggetto == 'string') {
                    tmpY = oggetto;
                } else {
                    tmpY = String(oggetto);
                }
            } else if (String(tipo).toLowerCase() == 'symbol') {

                if (typeof oggetto == 'symbol') {
                    tmpY = oggetto;
                } else {
                    tmpY = Symbol(oggetto);
                }
            }
            return tmpY;
        }
    } catch (error) {
        return error;
    }

    throw new Error("II, Errore di conversione");
}