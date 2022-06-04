const readline = require('prompt-sync') ();

function bhaskara (a, b, c) {
    let delta = b**2 - 4*a*c;
    let x = [];
    x[0] = (-b + Math.sqrt(delta))/2*a;
    x[1] = (-b - Math.sqrt(delta))/2*a;
    return x;
}

function main () {
    try {
        console.log('insira o valor de a');
        let a = Number(readline());
        console.log('insira o valor de b');
        let b = Number(readline());
        console.log('insira o valor de c');
        let c = Number(readline());
        let x = bhaskara(a, b, c);
        console.log(x);
    } catch (err) {
        console.log('TÁ ERRADO');
        console.log(err.message);
    }
}

main ();