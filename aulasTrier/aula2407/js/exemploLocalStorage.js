localStorage.setItem('nome', 'Laura'); // Armazena o nome "Laura" no localStorage

const nomeGuardado = localStorage.getItem('nome'); // Recupera o nome armazenado
console.log(nomeGuardado); // Exibe: Laura

localStorage.removeItem('nome'); // Remove o item 'nome' do localStorage
const nomeRemovido = localStorage.removeItem('nome'); // Tenta recuperar o nome após remoção
console.log(nomeRemovido); // Exibe: null (pois o item foi removido)

localStorage.clear(); // Limpa todos os itens do localStorage
const nomeLimpo = localStorage.getItem('nome'); // Tenta recuperar o nome após limpar
console.log(nomeLimpo); // Exibe: null (pois o item foi removido)