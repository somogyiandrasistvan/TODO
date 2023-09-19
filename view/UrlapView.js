class UrlapView {
  #adat = {};

  constructor(adat, szuloElem) {
    this.szuloElem = szuloElem;
    this.szuloElem.html("<form>");
    this.formElem = this.szuloElem.children("form");
    this.#adat = adat;
    this.#urlapletrehozasa();
    this.submitElem = this.formElem.children("div").children("#submit");
    this.submitElem.on("click", (event) => {
      event.preventDefault();
      this.#adatGyujt();
      this.#kattintasTrigger("ujAdatHozzaAdas");
    });
  }

  #adatGyujt() {
    const IDO = $("#ido");
    const TEV = $("#tev");
    this.#adat.tevekenyseg = IDO.val()
    console.log(this.#adat)
    
  }

  #urlapletrehozasa() {
    let txt = "<div class='form-group'>";
    txt += "<input type='text' class='tev' name='tevekenyseg'>";
    txt += "<input type='text' id='ido' name='hatarido'>";
    txt += "<button id=submit type='button'>Kész</button>";
    txt += "</div>";
    this.formElem.append(txt);

  }

  #kattintasTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev, { detail: this.#adat });
    window.dispatchEvent(E);
  }
}

export default UrlapView;
