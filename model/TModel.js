class TModel {
  #lepes;
  #ertek = "";
  constructor(karakter1, karakter2) {
    this.#lepes = 0;
  }
  aktualisJatekos(karakter1, karakter2) {
    this.#ertek = this.#lepes % 2 === 0 ? this.karakter1 : this.karakter2;
    this.#lepes++;
    return this.#ertek;
  }

  kovetkezoJatekos(karakter1, karakter2) {
    this.#ertek =
      this.#ertek == this.karakter1 ? this.karakter2 : this.karakter1;
    return this.#ertek;
  }

  setLepes(lepes) {
    this.#lepes = lepes;
  }
  getLepes() {
    return this.#lepes;
  }
  getKarakter1() {
    return this.karakter1;
  }

  getKarakter2() {
    return this.karakter2;
  }

  setKarakter(valasztott) {
    this.karakter1 = valasztott;
  }

  setKarakter2(valasztott) {
    this.karakter2 = valasztott;
  }
}
export default TModel;
