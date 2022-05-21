const readline = require('prompt-sync')();

function printarArray (numero){
    for(let item of numero){
        process.stdout.write(`${item} `);
    }
}

function main(){
    try{
        console.log("Passe quantos valores do Array: ");
        let a = Number(readline());
        let numero = [a];
        console.log("Passe os valores do Array: ");
        for(let i = 0; i<a; i++){
            numero[i]= Number(readline());            
        }
        
        printarArray(numero);
    }
    catch(err ){
        console.log(err.message);
        console.log("ERRORR")
    }
}
main();