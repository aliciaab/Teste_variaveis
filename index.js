// Variáveis fora de qualquer função
var a = 10; // Variável global (funciona em qualquer lugar do código)
let b = 12; // Variável de bloco (localizada ao redor de onde foi declarada, mas pode ser acessada fora de funções, dependendo do escopo)
const c = 5; // Constante global (não pode ser alterada depois de definida)

// Função para testar o comportamento das variáveis
function testarVariaveis() {
  var a = 20; // Variável 'a' declarada com 'var' dentro da função, cria uma nova variável que "sombra" a global
  let b = 25; // Variável 'b' com 'let' dentro da função (escopo local)

  // Selecionando o elemento para exibir os resultados dentro da função
  const resultDiv = document.getElementById("result-function");
  if (resultDiv) {
    resultDiv.innerHTML = `
      <strong>Dentro da função:</strong><br>
      a (var): ${a}<br> 
      b (let): ${b}<br>
      c (const): ${c}<br>
    `;
  }
}

// Esperar o carregamento do DOM para executar o script
document.addEventListener('DOMContentLoaded', () => {
  // Chamando a função
  testarVariaveis();

  // Imprimindo valores fora da função
  const resultOutsideDiv = document.getElementById("result-outside");
  if (resultOutsideDiv) {
    resultOutsideDiv.innerHTML = `
      <strong>Fora da função:</strong><br>
      a (var): ${a}<br> 
      b (let): ${b}<br>
      c (const): ${c}<br>
    `;
  }

  // Operações básicas
  var resultado1 = a + b; // Soma usando 'var' (global) e 'let' (local)
  var resultado2 = resultado1 * c; // Multiplicação com 'const' (não pode ser alterado)

  // Exibindo os resultados das operações
  const resultOperationsDiv = document.getElementById("result-operations");
  if (resultOperationsDiv) {
    resultOperationsDiv.innerHTML = `
      <strong>Resultados das operações:</strong><br>
      Resultado da soma (a + b): ${resultado1}<br>
      Resultado da multiplicação (resultado1 * c): ${resultado2}<br>
    `;
  }
});
