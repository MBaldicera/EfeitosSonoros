function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();   
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[2].onclick = tocaSomAplausos

let contador = 0;
//Estrutura de repetição - Enquanto
while(contador<9){
    listaDeTeclas[0].onclick = tocaSomAplausos;
    contador = 1;
}

