function somatorio(numeros) {
    if (!Array.isArray(numeros)) throw new Error("A entrada deve ser um array de números.");
    return numeros.reduce((acc, curr) => {
        if (typeof curr !== 'number') throw new Error("Todos os elementos devem ser números.");
        return acc + curr;
    }, 0);
}
