import Elem from "./Elem.js";
class Jatekter {
  constructor(szuloElem, n) {
    this.n = n;
    $(":root").css("--meret", this.n);

    for (let index = 0; index < this.n * this.n; index++) {
      new Elem(szuloElem);
    }
  }
}
export default Jatekter;
