
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

# Struttura generale per funzioni
La struttura delle due funzioni (and, or) è simile.
> (variableToCompare: any | Array<any| logicOperator>, params?: operator, howToHandleError?: howToHandleError)

di seguito spiegati i parametri:

## variableToCompare: any | Array<any| logicOperator>
accetta tipi normali: string e number. Accetta funzioni e le esegue prima di compararle. 
> Attenzione in caso di errore rilancerà l'errore cosi come è.

Questo parametro qualora passato singolarmente entrera direttamentente nell'iter di accoppiamento, altrimenti avra un percorso alternativo. Se array potrebbe essere un array semplice di elementi da comparare, in questo caso l'operatore booleano verra deciso a seconda della funzione richiamata. 
> es:  xx([a,b], '==')(x1,x2,x3,x4,x5); ->  a == x1 XX a == x2 XX a == x3 XX a == x4 XX a == x5 XX  b == x1 XX b == x2 XX b == x3 XX b == x4 XX b == x5

al posto delle XX andiamo a sostituire l'operatore che viene deciso dalla funzione richiamata. Quindi con :
- and avremo &&
- or avremo ||

Ma abbiamo un'ulteriore parametro da passare(type logicOperator), questo si divide in tre opzioni:
- and puo essere rappresentata da: 'and', '&'
- or puo essere rappresentata da: 'or', '|'
- not puo essere rappresentata da: 'not', '!'

Se andiamo ad inserirli dobbiamo usare un po' di testa, potrebbe essere causa di errore.
Se inseriti cambiano l'operatore che si frappone fra le varie comparazione che si terranno alla destra e alla sinistre del simbolo. Esempio, usando un operatore "and" e scrivendolo proprio con "and": 
> es:  xx([a,'and',b], '==')(x1,x2,x3,x4,x5); ->  a == x1 XX a == x2 XX a == x3 XX a == x4 XX a == x5 &&  b == x1 XX b == x2 XX b == x3 XX b == x4 XX b == x5

Notare che ora independentemente dal metodo (and, or) usato fra il primo gruppo di comparazione (a)(x1,x2,x3,x4,x5) e il secondo (b)(x1,x2,x3,x4,x5) verra sempre infraposto l'operatore scielto, nel nostro cosa 'and'.

## params?: operator
Vanno a determinare quale operazione andare ad eseguire.
> '<' | '>' | '==' | '<=' | '>=' | '!=' | ((x: any, y: any) => boolean);

si possono andare ad usare i classici operatori di confronto oppure passare una funzione che verra richiamata al loro posto.

## howToHandleError?: howToHandleError
se i tipi sono differenti i casi gestibili sono specificabili settando la variabile howToHandleError:
- error : solleva un errore: Errore: tipi differenti (questo è settabile in caso modificando la variabile messageErrore)
- try:  provera il confronto
- return : ritorna falso se i tipi sono differenti
- skip : evita il confronto se i tipi sono differenti
- convert : prova la confronto ma prima prova a convertire a un valore comune

# Assign
Funzione che cerca di combinare un unmero di elementi con un altro.
Per esempio questo potrebbe essere un uso normale

> assign("")("");

# Take
Funzione che si propone di eseguire una ricerca prendendo un numero di elemente e cercandoli all'internodi altri elemnti.

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