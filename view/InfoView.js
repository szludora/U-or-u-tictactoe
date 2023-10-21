class InfoView {
  constructor(szulo) {
    this.szulo = szulo;
    // this.htmlOsszeallit();
   
  }

  kiir(jatekos, elem) {
    elem.html(jatekos + "  következik!");
  }

  // htmlOsszeallit() {
  //   let txt = '<p>Ki következik?</p>';
  //   this.szulo.html(txt);
  // }
}
export default InfoView;
