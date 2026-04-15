let a = parseInt(prompt("Digite o primeiro número:"));
let b = parseInt(prompt("Digite o segundo número:"));
let aux = 0;

let aInicial = a;
let bInicial = b;

function mdc(a, b) {
            a = Math.abs(a);
            b = Math.abs(b);
            while (b !== 0) {
                let aux = b;
                b = a % b;
                a = temp;
            }
            return a;
        }
console.log(`O MDC de ${aInicial} e ${bInicial} é: ${mdc(a, b)}`);