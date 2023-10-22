class InfoView {
  constructor(karakter1, karakter2) {
    this.karakter1 = karakter1;
    this.karakter2 = karakter2;
    this.htmlOsszeallit();
  }

  kiir(jatekos, karakter1, karakter2) {
    var elem;

    if (jatekos === karakter1) {
      elem = $(".kovetkezikU");
      elem.html(karakter1 + "  következik!");
    } else {
      elem = $(".kovetkezikUf");
      elem.html(karakter2 + "  következik!");
    }
  }

  htmlOsszeallit() {
    let szulo = $(".kovetkezikU");
    szulo.html(this.karakter1 + " kezdi a játékot!");
  }
}
export default InfoView;
