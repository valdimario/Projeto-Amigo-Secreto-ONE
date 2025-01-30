let amigos = []; //criamos uma lista para armazenar os nomes dos amigos

function adicionarAmigo(){
 let nomeInserido = document.querySelector('input').value; //value significa que vamos armazenar dentro da variável nomeInserido o que o usuário digitar na caixa de texto
        console.log(nomeInserido); 
    
    if(nomeInserido == ''){
        return alert('Por favor, insira um nome.');
    } else {
        amigos.push(nomeInserido); // .push() é usado para adicionar um elemento ao final de uma lista
        console.log(amigos);
        limparCampo() 
    }
    
}

function limparCampo(){
    nomeInserido = document.querySelector('input'); // retorna ao input no HTML e armazena ele na variável nomeInserido
    nomeInserido.value = ''; // define o campo input em uma string vazia
}
