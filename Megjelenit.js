import MegjelenitSor from "../MegjelenitSor.js";

class Megjelenit {
  #lista = [];

  constructor(lista, szuloElem) {
    this.#lista = lista;
    szuloElem.append("<table class='table table-bordered table-striped'>");
    this.tablaElem = szuloElem.children("table");
    this.kiir();

    $(window).on("megjelenit", (event) => {
        console.log(event.detail)
        event.detail.remove();
    });
  }

  kiir() {
    this.#lista.forEach((elem) => {
      new MegjelenitSor(elem, this.tablaElem);
    });
  }
}

export default Megjelenit;
