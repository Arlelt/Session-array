const readline = require ('prompt-sync') ();

function ascii (txt) {
    let a = [];
    for (let i = 0; i < txt.lenght; i++) {
        a[i] = txt.charCodeAt(i);
        
    }
    return a;
}

