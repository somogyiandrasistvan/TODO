import Megjelenit from "../Megjelenit.js";
import { TODOLIST2 } from "../adatok.js";

$(function () {
  const TAROLO = $(".tarolo");
  new Megjelenit(TODOLIST2, TAROLO);
});
