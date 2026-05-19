function contagem(n, dados) {
    let contador = 0;
    for (let i = 0; i < dados.length; i++) {
        if (Number.isInteger(dados[i]) && dados[i] <= n) {
            contador++;
        }
    }
    return contador;
}
