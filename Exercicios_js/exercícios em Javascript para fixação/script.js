function olaMundo() {
    alert("Olá Mundo")
  }
  function mostraNome() {
    let nome = prompt("Por favor, digite seu nome:")
    console.log("o nome  é:"+ nome)
  }
  function concatenaPalavras() {
    let p1 = prompt("digite primeira palavra")
    let p2 = prompt("digite segunda palavra")
    console.log(p1+p2)
  }
  function somaNumeros(){
    var n1 =  parseFloat(prompt("digite primeiro numero"))
    var n2 =  parseFloat(prompt("digite segundo numero"))
    console.log(n1+n2)
  }
  function subtrairNumeros(){
    var n1 =  parseFloat(prompt("digite primeiro numero"))
    var n2 =  parseFloat(prompt("digite segundo numero"))
    console.log(n1-n2)
  }
  function criaObjeto() {
    var nome = prompt("Digite seu nome:")
    var idade = parseInt(prompt("Digite sua idade:"))
    var timeFavorito = prompt("Digite seu time favorito:")
  
    var usuario = {
      nome: nome,
      idade: idade,
      timeFavorito: timeFavorito
    };
  
    console.log("Objeto usuario:")
    console.log(usuario)
}
function calculadora() {

  const operacao = prompt("Escolha uma operação: somar, subtrair, multiplicar ou dividir")
  const numero1 = parseFloat(prompt("Digite o primeiro número:"))
  const numero2 = parseFloat(prompt("Digite o segundo número:"))

 
  switch (operacao) {
    case "somar":
      console.log(`Resultado: ${numero1 + numero2}`)
      break;
    case "subtrair":
      console.log(`Resultado: ${numero1 - numero2}`)
      break;
    case "multiplicar":
      console.log(`Resultado: ${numero1 * numero2}`)
      break;
    case "dividir":
      if (numero2 !== 0) {
        console.log(`Resultado: ${numero1 / numero2}`)
      } else {
        console.log("Não é possível dividir por zero.")
      }
      break;
    default:
      console.log("Operação inválida. Por favor, escolha somar, subtrair, multiplicar ou dividir.")
  }
}
function mudaConstante() {
 
  const name = prompt("Digite seu nome")
  console.log(name)
}
function manipulaArrays() {
 
  const cores = ["branco", "azul", "vermelho", "verde", "preto", "amarelo", "marrom", "violeta", "rosa", "ciano", "magenta", "cinza"];

  cores.push("Laranja");
  console.log("Array após adicionar 'Laranja':", cores);

  const corRemovida = cores.pop();
  console.log("Cor removida usando pop():", corRemovida);
  console.log("Array após usar pop():", cores);

  cores.sort();
  console.log("Array após usar sort():", cores);

  const indiceAzul = cores.indexOf("azul");
  if (indiceAzul !== -1) {
    cores.splice(indiceAzul, 1);
  }
  console.log("Array após remover 'azul' usando splice():", cores);

  console.log("Primeiro elemento do array:", cores[0]);
  console.log("Último elemento do array:", cores[cores.length - 1]);

  cores.unshift("fucsia");
  console.log("Array após adicionar 'fucsia' usando unshift():", cores);

  const corRemovidaDoInicio = cores.shift();
  console.log("Cor removida do início usando shift():", corRemovidaDoInicio);
  console.log("Array após usar shift():", cores);
}









