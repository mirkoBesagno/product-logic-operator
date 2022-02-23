

type operator = '<' | '>' | '==' | '<=' | '>=' | '!=';

const or = function (variabiliConfrontabile: any, params: operator) {
    return function (...variabiliDaConfrontare: any) {
        for (const y of variabiliDaConfrontare) {
        switch (params) {
            case '==':
                if (variabiliConfrontabile == variabiliDaConfrontare) {
                    return true;
                }
                break;
            default:
                break;
        }
    }
    return false;
    }
    
}

or(true, '==')(
    '','',''
    );

