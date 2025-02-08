const inserir = document.querySelector("#digitar-tarefa");
const btninserir = document.querySelector("#btninserir");
const listatarefas = document.querySelector("#lista-tarefas")

const adicionartarefa = () => {
    if (inserir.value.trim() === "") return;
    listatarefas.style.background = "white"

    const item = document.createElement("li");
    const verificar = document.createElement("input");
    const conteudo = document.createElement("span");
    const botaoremove = document.createElement("button");

    verificar.type = "checkbox" ;
    conteudo.textContent = inserir.value;
    botaoremove.textContent = "🗑";
    botaoremove.style.marginLeft = "10px";

    item.appendChild(verificar);
    item.appendChild(conteudo);
    item.appendChild(botaoremove);

    listatarefas.appendChild(item);

    inserir.value = "";
};

btninserir.addEventListener("click", adicionartarefa );