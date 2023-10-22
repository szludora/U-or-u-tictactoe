class Jatekos {
  constructor(karakter) {
    this.karakter = karakter;
  }

  setKarakter(valasztott) {
    this.karakter = valasztott;
  }
  getKarakter() {
    if (this.karakter == "") {
      return undefined;
    } else {
      return this.karakter;
    }
  }
}
export default Jatekos;
