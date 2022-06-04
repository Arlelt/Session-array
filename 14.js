const readline = require('prompt-sync') ();

function tabuada (num) {
    let a = [];
    for (let i = 0; i <= 10; i++) {
        a[i] = num * i;
    }

    return a;
}

function main () {
    try {
        console.log('insira um número');
        let a = Number(readline());
        let x = tabuada(a);
        console.log(x);
    } catch (err) {
        console.log('TÁ ERRADO');
        console.log(err.message);
    }
}

main ();