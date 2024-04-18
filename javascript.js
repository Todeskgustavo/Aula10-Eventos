/* teste de onclick
document.getElementById('meuBotao').onclick = function() {
    this.innerHTML = 'Texto alterado';
    this.style.backgroundColor = 'blue';
    this.style.color = 'white';
};
*/

function eventoDblClick(){
    alert('Evento de clique duplo');
}

function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

/* -- Função demonstrando o evento onmousemove 
function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append('o mouse moveu<br>');
}
*/

function mudou(){
    console.log('Mudou');
}

function validarCampo(campo){
    if(campo.value.trim() === '') {
        alert('Por favor, preencha o campo ' + campo.id);
        campo.focus();
    }
}

function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}
