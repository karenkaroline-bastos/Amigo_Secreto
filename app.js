//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Criar as Listas 
let amigos = []; // Lista para armazenar os amigos
let amigosSorteados = []; // Lista para registrar quais amigos já foram sorteados

// Função para adicionar amigos
function adicionarAmigo() {
  let adicionarAmigo = document.querySelector("input").value; // Obter o texto inserido pelo usuário
  
  if (adicionarAmigo) { // Verifica se o campo não está vazio
    amigos.push(adicionarAmigo); // Adiciona o nome no array de amigos
    atualizarListAmigos(); // Atualiza a lista de amigos na interface
    document.querySelector("input").value = ""; // Limpa o campo de entrada após a adição
  } else { // Caso o campo esteja vazio, exibe um alerta
    alert("Por favor, insira um nome de um(a) amigo(a)!");
  }
}

// Função para atualizar a lista de amigos na interface
function atualizarListAmigos() {
  let listaAmigos = document.getElementById("listaAmigos"); // Obtém o elemento da lista no HTML
  listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

  for (let i = 0; i < amigos.length; i++) { // Percorre a lista de amigos
    let item = document.createElement("li"); // Cria um novo item de lista
    item.textContent = amigos[i]; // Define o nome do amigo como texto do item
    listaAmigos.appendChild(item); // Adiciona o item à lista no HTML
  }
}

// Função para sortear um amigo
function sortearAmigo() {
  if (amigos.length === 0) { // Verifica se há amigos cadastrados
    alert("A lista está vazia! Adicione amigos antes de sortear.");
    return; // Interrompe a execução da função
  }
  
  let nomeAleatorio = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório dentro da lista de amigos

  if (nomesNoMaximo()) { // Verifica se todos os amigos já foram sorteados
    alert ('Todos os(as) amigos(as) já foram sorteados!');
  } else if (amigosSorteados.includes(nomeAleatorio)) { // Se o nome já foi sorteado, sorteia novamente
    sortearAmigo();
  } else {
    amigosSorteados.push(nomeAleatorio); // Adiciona o índice do sorteado à lista de sorteados
  }

  let nomeDoSorteado = amigos[nomeAleatorio]; // Obtém o nome correspondente ao índice sorteado

  let resultado = document.getElementById("resultado"); // Obtém o elemento que exibe o resultado no HTML
  resultado.innerHTML = ''; // Limpa o resultado anterior
  resultado.innerHTML = `Amigo(a) sorteado é ${nomeDoSorteado}`; // Exibe o nome do sorteado
}

// Função para verificar se todos os amigos já foram sorteados
function nomesNoMaximo(){
    let totalAmigos = amigos.length; // Obtém o total de amigos cadastrados
    let totalSorteados = amigosSorteados.length; // Obtém o total de amigos já sorteados
   
    return totalAmigos == totalSorteados; // Retorna true se todos já foram sorteados
}