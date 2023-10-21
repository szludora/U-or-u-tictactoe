class InfoView {
  constructor(szulo) {
    this.szulo = szulo;
    this.htmlOsszeallit();
  }
  
  kiir(jatekos) {
    var elem;
    if (jatekos === "👽") {
      elem = $(".kovetkezikUf");
    } else {
      elem = $(".kovetkezikU");
    }
    elem.html(jatekos + "  következik!");
  }

  htmlOsszeallit() {
    let szulo = $(".unicorn p:nth-child(2)")
    szulo.html("👨🏽‍🚀 kezdi a játékot!");
  }
}
export default InfoView;
