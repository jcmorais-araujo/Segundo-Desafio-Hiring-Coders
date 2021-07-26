var validationDefault01 = document.querySelector('#validationDefault01');
var validationDefault02 = document.querySelector('#validationDefault02');
var validationDefault04 = document.querySelector('#validationDefault04');
var story = document.querySelector('#story');

const btnInsert = document.querySelector('#btnInsert');

btnInsert.onclick = function() {
    var codigo = validationDefault01.value;
    var nome = validationDefault02.value;
    var descricao = story.value;
    var qtd = validationDefault04.value;


    newProduct = {
        codigo,
        nome,
        descricao,
        qtd
    }

    window.localStorage.setItem('produto', JSON.stringify(newProduct));


    console.log(codigo);
    console.log(nome);
    console.log(descricao);
    console.log(qtd);

}