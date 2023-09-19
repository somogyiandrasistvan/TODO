import Megjelenit from "../view/Megjelenit.js";
import Model from "../model/Model.js";
import UrlapView from "../view/UrlapView.js";

class Controller {
  constructor() {
    const UJADAT = $(".ujadat");
    const TAROLO = $(".tarolo");
    const MODEL = new Model();
    new UrlapView({ tevekenyseg: "", hatarido: "" }, UJADAT);
    new Megjelenit(MODEL.getList(), TAROLO);

    $(window).on("ujAdatHozzaAdas", (event) => {
      console.log("asd");
      console.log(event.detail);
      MODEL.ujAdat(event.detail);
      TAROLO.empty();
      new Megjelenit(MODEL.getList(), TAROLO);
    });

    $(window).on("torles", (event) => {
      console.log(event.detail);
      MODEL.torol(event.detail);
      TAROLO.empty();
      new Megjelenit(MODEL.getList(), TAROLO);
    });

    $(window).on("kesz", (event) => {
      console.log(event.detail);
      MODEL.boolean(event.detail);
      TAROLO.empty();
      new Megjelenit(MODEL.getList(), TAROLO);
    });
  }
}
export default Controller;
