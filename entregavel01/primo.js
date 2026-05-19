function checarPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

