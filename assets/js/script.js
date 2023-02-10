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

  tecla.onkeydown = (event) => {
    console.log(event);
    if (event.KeyCode === "13") {
      tecla.classList.add("main__item--active");
    }
  };

  tecla.onkeyup = () => {
    tecla.classList.remove("main__item--active");
  };
}
