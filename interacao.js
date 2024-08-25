const div = document.querySelector(".list");
const input = document.querySelector("#entrada");

function newTask() {
    if (!input.value) {
        alert("Insira uma tarefa");
    } else {
        // Criação de um container para a tarefa e o botão
        const taskContainer = document.createElement("div");
        taskContainer.className = "task-container";

        // Criação do parágrafo para a tarefa
        const p = document.createElement("p");
        p.innerHTML = input.value;

        // Criação do botão de ação
        const button = document.createElement("button");
        button.innerHTML = "feito"; // Define o texto do botão como "feito"
        button.className = "botao";

        // Adiciona o parágrafo e o botão ao container
        taskContainer.appendChild(p);
        taskContainer.appendChild(button);

        // Adiciona o container à div principal
        div.appendChild(taskContainer);

        // Evento de clique no botão para remover a tarefa e o botão
        button.addEventListener("click", () => {
            div.removeChild(taskContainer);
        });

        // Limpa o input após adicionar a tarefa
        input.value = "";
    }
}

