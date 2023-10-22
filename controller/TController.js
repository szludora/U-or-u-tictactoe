import Jatekter from "../view/Jatekter.js";
import TModel from "../model/TModel.js";
import InfoView from "../view/InfoView.js";
import Jatekos from "../model/Jatekos.js";

class TController {
  constructor() {
    const urlParams = new URLSearchParams(window.location.search);
    this.karakter1 = urlParams.get("karakter1");
    this.karakter2 = urlParams.get("karakter2");
    this.karakterBeallitas();
    this.jatekIndul();
    this.gombok();
  }

  gombok() {
    $("button").each((index, button) => {
      $(button).on("click", () => {
        const meret = $(button).attr("meret");
        $(".jatekter").html("");
        $(".kovetkezikU").html("");
        $(".kovetkezikUf").html("");
        $(".nyilUfo").css("visibility", "hidden");
        $(".nyilUnicorn").css("visibility", "visible");
        this.tmodel = new TModel();
        new Jatekter($(".jatekter"), meret);
        this.tmodel.setKarakter(this.karakter1);
        this.tmodel.setKarakter2(this.karakter2);
        this.info = new InfoView(this.karakter1, this.karakter);
      });
    });
  }

  jatekIndul() {
    $(".nyilUfo").css("visibility", "hidden");
    var unicorn = $(".unicorn");
    var ufo = $(".ufo");
    new Jatekter($(".jatekter"), 3);
    this.tmodel = new TModel();
    this.tmodel.setKarakter(this.karakter1);
    this.tmodel.setKarakter2(this.karakter2);
    this.info = new InfoView(this.karakter1, this.karakter);

    $(window).on("elemKivalaszt", (event) => {
      const akt_j = this.tmodel.aktualisJatekos(this.karakter1, this.karakter2);
      event.detail.setErtek(akt_j);
      const jatekos = this.tmodel.kovetkezoJatekos(
        this.karakter1,
        this.karakter2
      );
      this.info.kiir(jatekos, this.karakter1, this.karakter2);
      this.jatekosEllenorzes(jatekos);
    });
  }

  karakterBeallitas() {
    if (this.karakter1 && this.karakter2) {
      this.jatekos1 = new Jatekos(this.karakter1);
      this.jatekos2 = new Jatekos(this.karakter2);
    } else {
      alert("Nincsenek karakterek az URL-ben!");
    }
  }

  jatekosEllenorzes(jatekos) {
    if (jatekos === this.karakter1) {
      $(".nyilUfo").css("visibility", "hidden");
      $(".nyilUnicorn").css("visibility", "visible");
      $(".kovetkezikUf").html("");
    } else {
      $(".nyilUnicorn").css("visibility", "hidden");
      $(".nyilUfo").css("visibility", "visible");
      $(".kovetkezikU").html("");
    }
  }
}
export default TController;
