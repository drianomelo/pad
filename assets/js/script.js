function tocaSom(idAudio) {
  document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".main__item");

for (let cont = 0; cont < listaDeTeclas.length; cont++) {
  const tecla = listaDeTeclas[cont];
  const somTecla = tecla.classList[1];
  const idAudio = `#som_${somTecla}`;

  tecla.onclick = () => {
    tocaSom(idAudio);
  };
}
