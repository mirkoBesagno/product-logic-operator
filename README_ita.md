
# Introduzione
Si ispira al concetto di **moltiplicazione polinomiale** e cerca di riproporre il concetto nelle **operazioni di confronto**.
Per il momento è molto minimale, per comprendere si propone un esempio:

## Esempio
### OR
Questo è una serie di confronti scritti in maniera classica.
> a == x1 || a == x2 || a == x3 || a == x4 || a == x5
 
da cosi diventerebbe cosi: 

> or(a, '==')(x1,x2,x3,x4,x5);

### AND
similmente:

> a == x1 && a == x2 && a == x3 && a == x4 && a == x5

diventerebbe

> and(a, '==')(x1,x2,x3,x4,x5);
# OPZIONI
accetta tipi normali: string e number. Accetta funzioni e le esegue prima di compararle. 
> Attenzione in caso di errore rilancerà l'errore cosi come è.

## howToHandleError
se i tipi sono differenti i casi gestibili sono specificabili settando la variabile howToHandleError:
- error : solleva un errore: Errore: tipi differenti (questo è settabile in caso modificando la variabile messageErrore)
- try:  provera il confronto
- return : ritorna falso se i tipi sono differenti
- skip : evita il confronto se i tipi sono differenti
- convert : prova la confronto ma prima prova a convertire a un valore comune

# Operatori
Ultima cosa è il discorso degli operatori di confronto. Questi sono i classici ( ==, <, >, ecc) in oltre è possibile andare a inserire una funzione che svolga questo compito.
> es: and(tmp, (x, y) => { if(x>y)return true; else return false; }, 'convert')(true, 'true', 1);

# Shot
Funzione che si propone si eseguire una operazione in un try-catch, cercando di snellire il procedimento e la scrittura.
Accetta in ingresso o una funzione oppure un valore. (sto pensando se inserire delle opzioni che possano andare a specificare meglio cosa succede in fase di conversione.)

## Esempio
const messaggio = shot(() => {
    if (tmp == true) {
        return 'ciao';
    }
    else if (tmp == false) {
        return 'wella';
    }
    else {
        throw new Error("monazza");
    }
});
