function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();   
}
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
//Estrutura de repetição - Enquanto
while(contador<listaDeTeclas.length){
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_aplausos')
    }
    contador = contador + 1;
}

