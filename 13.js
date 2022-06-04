const readline = require('prompt-sync')();

function dobro (array) {
    let a = [];
    let b = 0;
    for (let item of array) {
        a[b] = item * 2;
        b++
    }
    return a;
    
}

function main () {
    try {
        console.log("Passe quantos valores do Array: ");
        let a = Number(readline());
        let numero = [a];
        console.log('passe os valores do array');
        for(let i = 0; i<a; i++){
            numero[i]= Number(readline());            
        }
        let b = dobro(numero);
        console.log(b);
    }
    catch (err){
        console.log(err.message);
    }
}

main();