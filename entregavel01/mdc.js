function mdc(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    let aux = 0;
    while (b !== 0) {
        let aux = b;
        b = a % b;
        a = aux;
    }
    return a;
}
