class InfoView {
  constructor(szulo) {
    this.szulo = szulo;
    this.htmlOsszeallit();
  }

  kiir(jatekos, elem) {
     elem.html(jatekos + "  következik!");
  }

  htmlOsszeallit() {
    // this.szulo.html("👨🏽‍🚀 kezdi a játékot!");
    this.nyilak(this.szulo);
  }

  nyilak(szulo) {
    console.log(szulo.hasClass("unicorn"));
   
  }
}
export default InfoView;
