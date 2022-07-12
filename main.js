function tocaSom(SeletorAudio){
  const elemento  = document.querySelector(SeletorAudio);

  if(elemento === null){
    console.log('Elemento Não encontrado')

    }else if(elemento  &&  elemento.localName === 'audio'){
    elemento.play();
    }


}

const ListaDeTeclas = document.querySelectorAll('.tecla');

// o while espera receber uma função que seja verdadeira ou falsa
for(let contador = 0; contador < ListaDeTeclas.length; contador++){

    const tecla = ListaDeTeclas[contador]// contador vai passando pelos indices

    const instrumento = tecla.classList[1] // vai pegar a classe do indice

    const idAudio = `#som_${instrumento}`

   tecla.onclick = function(){ // função anonima
        tocaSom(idAudio)
    }; 

    
    tecla.onkeydown = function (evento) { //movimento de clicar no teclado
        if(evento.code === 'Space' || evento.code === 'Enter' ){// pegando um evento da tecla space
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () { // movimento de parar de clicar
        tecla.classList.remove('ativa')
    }

 }

