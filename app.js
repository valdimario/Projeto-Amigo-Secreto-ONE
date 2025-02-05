let amigos = []; //criamos uma lista para armazenar os nomes dos amigos

function adicionarAmigo(){
let nomeInserido = document.querySelector('input').value; //value significa que vamos armazenar dentro da variável nomeInserido o que o usuário digitar na caixa de texto
    console.log(nomeInserido); 
    
    if(nomeInserido == ''){

        return alert('Por favor, insira um nome.');

    } else {

        amigos.push(nomeInserido); // .push() é usado para adicionar um elemento ao final de uma lista
        console.log(amigos);
        listaAmigos();
        limparCampo();

    }
}

function limparCampo(){
    nomeInserido = document.querySelector('input'); // retorna ao input no HTML e armazena ele na variável nomeInserido
    nomeInserido.value = ''; // define o campo input em uma string vazia
}

function listaAmigos(){
    let listaAmigosInseridos = document.getElementById('listaAmigos');
    listaAmigosInseridos.innerHTML = ""; //limpa a lista antes de adicionar novos nomes.
    console.log(amigos);

    for (let i = 0; i < amigos.length; i++){ //loop criado para adicionar cada amigo à lista <ul>
    let li = document.createElement('li'); //cria um novo item <li> para cada amigo.
    li.textContent = amigos[i]; // atribui o nome do amigo ao conteúdo do <li>.
    listaAmigosInseridos.append(li); // adiciona o item <li> à lista <ul>.
    
    }
}