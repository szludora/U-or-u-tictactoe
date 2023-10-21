class TModel {
  #lepes;
  #ertek = "";
  constructor() {
    this.#lepes = 0;
  }
  aktualisJatekos() {
    this.#lepes++;
    this.#ertek = this.#lepes % 2 === 0 ?"🌌": "👽"  ;
    return this.#ertek;
  }

  kovetkezoJatekos(){
    this.#ertek = this.#ertek == "👽"? "🌌":"👽" ;
    return this.#ertek;
  }
}
export default TModel;
