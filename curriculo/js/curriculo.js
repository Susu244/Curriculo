const nome = document.querySelector("#nome");
const telefone= document.querySelector("#telefone");
const botaoCidade= document.querySelector("#cidade");
const botaoEditar = document.querySelector("#editar");
const botaoSair = document.querySelector("#sair");

botaoEditar.addEventListener("click", function() {
    const novoNome = prompt("Digite seu nome:");
    if (novoNome !== null && novoNome.trim() !== "") {
        nome.textContent = novoNome.trim();
    }

    const novaCidade = prompt("Digite sua cidade:");
    if (novaCidade !== null && novaCidade.trim() !== "") {
        cidade.textContent = novaCidade.trim();
    }

    const novoTelefone = prompt("Digite seu telefone:");
    if (novoTelefone !== null && novoTelefone.trim() !== "") {
        telefone.textContent = novoTelefone.trim();
    }
});


botaoSair.addEventListener("click", function() {
    const resposta = confirm("Deseja realmente sair do perfil?");
    if (resposta) {
        alert("Você saiu do perfil");
    }
});