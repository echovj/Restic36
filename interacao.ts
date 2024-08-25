// Seleciona o elemento <div> com a classe "list" e o cast para HTMLDivElement
const div = document.querySelector(".list") as HTMLDivElement;

// Seleciona o elemento <input> com o ID "entrada" e o cast para HTMLInputElement
const input = document.querySelector("#entrada") as HTMLInputElement;

function newTask(): void {
    // Verifica se o campo de entrada está vazio
    if (!input.value) {
        // Alerta o usuário para inserir uma tarefa se o campo estiver vazio
        alert("Insira uma tarefa");
    } else {
        // Cria um novo elemento <p> para exibir a tarefa
        let p = document.createElement("p");
        
        // Cria um novo elemento <button> para a ação "feito"
        let button = document.createElement("button");
        
        // Adiciona o parágrafo e o botão ao contêiner <div>
        div.appendChild(p);
        div.appendChild(button);

        // Define o conteúdo do parágrafo como o valor do campo de entrada
        p.innerHTML = input.value;

        // Define o texto do botão como "feito"
        button.innerHTML = "feito";
        
        // Adiciona a classe "botao" ao botão para estilização
        button.className = "botao";

        // Adiciona um evento de clique ao botão
        button.addEventListener("click", () => {
            // Remove o parágrafo e o botão quando o botão é clicado
            div.removeChild(p);
            div.removeChild(button);
        });
    }
}










