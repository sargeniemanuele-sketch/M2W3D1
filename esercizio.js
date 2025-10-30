/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

 

function crazySum(num1, num2){
    if(num1 === num2){
        return(num1 + num2) * 3;
    }
    else{
        return num1 + num2;
    }
}
console.log(crazySum(15, 20)) 
console.log(crazySum(20, 20)) 

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/


function boundary(num3){
    if ((num3 >= 20 && num3 <= 100) || num3 === 400){
        return true;
    }
        
    else{
        return false;
    }
}

console.log(boundary(400));
console.log(boundary(50));
console.log(boundary(15));
 

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/




function reverseString(string){
    
    return string.split('').reverse().join('');
}

console.log(reverseString('EPICODE')); 



function reverseString(string){
    let stringReverse = '';
    for(let i = string.length - 1; i >= 0; i--){
        stringReverse = stringReverse + string[i];
    }
    return stringReverse 
}

console.log(reverseString('EPICODE'));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
function upperFirst(string){
    let words = string.split(' ');
    for(let i = 0; i < words.length; i++){
        let currentWord = words[i];
        currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
        words[i] = currentWord
    }
    return words.join(' ');
}
console.log(upperFirst('ciao sono virgola e sono un gattino'))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n){
    let numeri = [];
    for(let i = 0; i < n; i++){
        let randomNumber = Math.floor(Math.random() * 11);
        while(numeri.includes(randomNumber)){
            randomNumber =  Math.floor(Math.random() * 11);
        }
    numeri[i] = randomNumber; 
    }
    return numeri;
    
}
console.log(giveMeRandom(10));


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1,l2){
    const rettAre = l1 * l2;
    return rettAre;
}

console.log(area(5,7));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(n1){
    let diff = Math.abs(n1 - 19);
    if(diff > 19){
        return diff * 3;
    }
    else{
        return diff;
    }
}
console.log(crazyDiff(30,19));
console.log(crazyDiff(100,19));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify (stringa){
    if(stringa.startsWith('code')){
        return stringa;
    }
    else{
        return 'code ' + stringa;
    }
}
console.log(codify('ciao a tutti'));
console.log(codify('code di epicode'));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(numPos){
    if(!numPos.isInteger <= 0){
        return false;
    }
    else if(numPos % 3 === 0 || numPos % 7 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(check3and7(-5)); //false perchè è negativo
console.log(check3and7(3.5)); //false perchè non è intero
console.log(check3and7(10)); //false perchè non è multiplo ne di 10 ne di 3
console.log(check3and7(15)); //true perchè è multiplo di 3
console.log(check3and7(28)); //true perchè è multiplo di 7
console.log(check3and7(21)); //true perchè è multiplo sia di 3 che di 7


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(string){
    if(string.length <= 2){
        return string
    }
    else{
        return string.slice(1,-1);
    }
}
console.log(cutString('ciao a tutti'));
console.log(cutString('ciao'));
console.log(cutString('ep'));


