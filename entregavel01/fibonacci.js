function Fibonacci(posicao){
    //let posicao = parseInt(prompt("Digite qual posição da tabela você quer saber o valor.\n"))
    let n1 = 0
    let n2 = 1
    let valorAnterior = 0
    for(let i= 1; i <= posicao; i++){
        if(i==posicao){
            //console.log(`Valor na ${posicao}° posição da tabela é: ${n1}`)
            return n1;
        }
        valorAnterior = n1 + n2
        n1 = n2
        n2 = valorAnterior
    }
}
//Fibonacci(10)