const readline = require ('prompt-sync') (); 

function criarSequencia (limite) {
    let a = [limite];
    for (let i = 0; i < limite; i++) {
        a[i] = i;
    }

    return a;
}
function printarArray (numero){
    for(let item of numero){
        process.stdout.write(`${item} `);
    }
}

function main () {
    try {
        console.log("DIGITE O LIMITE");
        let a = Number(readline());
        let x = criarSequencia(a);
       printarArray(x);
    }

    catch(err ){
        console.log(err.message);
        console.log("ERRORR")
    }
}

main ();