
Si ispira al concetto di moltiplicazione polinomiale e cerca di riproporre il concetto nelle operazioni di confronto.
Per il momento è molto minimale, per comprendere si propone un esempio:

a == x1 || a == x2 || a == x3 || a == x4 || a == x5

diventerebbe

or(a, '==')(x1,x2,x3,x4,x5);

similmente:

a == x1 && a == x2 && a == x3 && a == x4 && a == x5

diventerebbe

and(a, '==')(x1,x2,x3,x4,x5);


accetta tipi normali: strin, number
accetta funzioni e le esegue prima di compararle, attenzione in caso di errore rilancerà l'errore cosi come è.

se i tipi sono differenti i casi gestibili sono specificabili settando la variabile howToHandleError:
'error' | 'try' | 'return' | "skip"
credo che i nomi parlino da soli
error = solleva un errore: Errore: tipi differenti (questo è settabile in caso modificando la variabile messageErrore)
try = provera il confronto
return = restituira il confronto come se fosse andato male
skip = saltera quella comparazione

se non gestito solleva l'errore di dafault.

questo è un hobby, quindi sarò molto felice di leggere ogni suggerimento e di vedere ogni modifica. ma non aspettatevi una mia reattività, quando entro vedo se no non vedo. spesso entro, e di solito potrei dire che una (little) visita al giorno la faccio, ma magari ci sono periodi buchi di mesi. quindi prendiamocela con calma e no stress.
vi ringrazio in anticipo per tutto e spero che l'uso della libreria sia per voi un aiuto.