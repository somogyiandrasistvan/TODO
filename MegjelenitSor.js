class MegjelenitSor {
  #obj = [];
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    this.#sor();

    this.sorElem = this.szuloElem.children("tr:last-child"); //aktuális sorelem;
    this.keszElem = this.sorElem.children("td").children(".kesz");
    this.kukaElem = this.sorElem.children("td").children(".kuka");
    this.kukaElem.on("click", () => {
      this.esemenyTrigger("megjelenit");
    });
    this.keszElem.on("click", () => {
      $(this.sorElem).css("background-color", "green");
      this.keszElem.attr("class", "torles");
      this.keszElem.html("❌");
    });
    this.torlesElem = this.sorElem.children("td").children(".torles");
    this.torlesElem.on("click", () => {
      $(this.sorElem).css("background-color", "white");
    });
  }

  #sor() {
    let txt = "<tr>";
    for (const key in this.#obj) {
      txt += "<td>" + this.#obj[key] + "</td>";
    }
    txt += "<td><span class='kesz'>✔</span> <span class='kuka'>🗑</span></td>'";
    txt += "</tr>";
    this.szuloElem.append(txt);
  }

  esemenyTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev, { detail: this.sorElem });
    window.dispatchEvent(E);
  }
}

export default MegjelenitSor;
