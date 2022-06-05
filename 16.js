const readline = require ('prompt-sync') ();

function asci (texto) {
    let a = [];
    for (let i = 0; i < texto.lenght; i++) {
        
        a[i] = texto.charCodeAt(i);
        
    }
    
    return a;
}

function main () {
    try {
        console.log("Insira um texto");
        let a = readline();
        let x = asci(a);
        console.log(x);
    } catch (err) {
        console.log("TÁ ERRADO");
        console.log(err.message);
    }
}

main ();