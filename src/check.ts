

/**
 * Funzione che determina se un tipo è lo stesso di un'altro. 
 * L'ordine è il seguente, la variabile che comanda è la prima, quindi il "tipo", che verra confrontata con la seconda. 
 * @param tipo puo essere un oggetto e allora si basera sulla proprieta "name"
 * @param oggetto 
 * @returns 
 */
export function check(tipo: any | 'bigint' | 'number' | 'boolean' | 'string' | 'symbol', oggetto: any):boolean|Error {
    try {

        if (typeof tipo == 'function') {

            if (tipo as 'name' && oggetto as 'name' && tipo.name == oggetto.name) {
                return true;
            } else if (tipo as 'name') {

                if (String(tipo.name).toLowerCase() == typeof oggetto) {
                    return true;
                } else {
                    return false;
                }
            }
        } else if (typeof tipo == typeof oggetto) {

            return true;
        } else if (typeof tipo == 'string') {
            let tmpY: any;

            if (String(tipo).toLowerCase() == 'bigint' || String(tipo).toLowerCase() == 'number') {
                if (typeof oggetto == 'bigint' || typeof oggetto == 'number') {
                    return true;
                } else {
                    tmpY = Number(oggetto);
                }
            } else if (String(tipo).toLowerCase() == 'boolean') {

                if (typeof oggetto == 'boolean') {
                    return true;
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
                    return true;
                } else {
                    tmpY = String(oggetto);
                }
            } else if (String(tipo).toLowerCase() == 'symbol') {

                if (typeof oggetto == 'symbol') {
                    return true;
                } else {
                    tmpY = Symbol(oggetto);
                }
            }
        }
        return true;
    } catch (error) {
        return false;
    }
}