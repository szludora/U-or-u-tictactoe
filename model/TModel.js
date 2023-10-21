class TModel {
  #lepes;
  #ertek = "";
  constructor() {
    this.#lepes = 0;
  }
  aktualisJatekos() {
    this.#ertek = this.#lepes % 2 === 0 ? "👨🏽‍🚀":"👽";
    this.#lepes++;
    return this.#ertek;
  }

  kovetkezoJatekos(){
    this.#ertek = this.#ertek == "👽"? "👨🏽‍🚀":"👽";
    return this.#ertek;
  }

  setLepes(lepes){
    this.#lepes = lepes;
  }
  getLepes(){
    return this.#lepes
  }
}
export default TModel;
