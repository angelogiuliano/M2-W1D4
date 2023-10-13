/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali data types in JavaScript sono: numeri (e bigInt), stringhe, booleani, undefined, null e symbol 
    
    numeri: possono avere valori che vanno da -2^53 a 2^53. JavaScript, a differenza di altri 
    linguaggi, fornisce solo un tipo di numero (anche per i decimali), fatta eccezione per bigInt,
    che è utilizzato per definire interi di lunghezza molto grande. Esistono valori numerici 
    speciali quali + e - infinity, e NaN (Not a Number).

    stringhe: sono semplici sequenze di caratteri racchiuse da delle virgolette (" ' `).

    booleani: sono valori che possono essere veri (true) o falsi (false).

    undefined e null: undefined è un valore che non esiste ancora, succede quando dichiariamo
    una variabile senza assegnarle alcun valore, mentre null rappresenza assenza di valore.

    symbol: rappresenta un identificatore unico, quindi anche se creiamo più symbol con i 
    medesimi valori, saranno comunque valori diversi (symbol1 == symbol2 darebbe false)

*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto in JavaScript è un contenitore di coppie chiave-valore, e un oggetto 
può contenere altri oggetti al suo interno. */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

console.log(12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Angelo";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
console.log(name1.toLowerCase() === name2.toLowerCase());
