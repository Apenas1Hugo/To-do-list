const inserir = document.querySelector("#digitar-tarefa");
const btninserir = document.querySelector("#btninserir");  //Selecionando os elementos pelo id
const listatarefas = document.querySelector("#lista-tarefas")

const adicionartarefa = () => {
    if (inserir.value.trim() === "") return; //if para não permitir tarefas em branco
    listatarefas.style.background = "white";

    const item = document.createElement("li");
    const verificar = document.createElement("input");  //criando os elementos
    const conteudo = document.createElement("span");
    const botaoremove = document.createElement("button");

    verificar.type = "checkbox" ;
    conteudo.textContent = inserir.value; //configurando os elementos
    botaoremove.textContent = "🗑";
    botaoremove.style.marginLeft = "10px";

    item.appendChild(verificar);
    item.appendChild(conteudo); //inserindo os itens na linha
    item.appendChild(botaoremove);

    const removertarefa = () =>{
        item.remove(); //removendo item da lista
        if (listatarefas && listatarefas.children.length == 0) {
            listatarefas.style.background = "rgb(55,67,117)";
        };
    };
    botaoremove.addEventListener("click", removertarefa ); 
    listatarefas.appendChild(item); //inserindo a linha na lista de tarefas 

  
    inserir.value = "";
};

btninserir.addEventListener("click", adicionartarefa );