import Jatekter from "../view/Jatekter.js";
import TModel from "../model/TModel.js";
import InfoView from "../view/InfoView.js";

class TController {
  constructor() {
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
        this.info = new InfoView($(".info"));
      });
    });
  }

  

  jatekIndul() {
    $(".nyilUfo").css("visibility", "hidden");
    var unicorn = $(".unicorn");
    var ufo = $(".ufo");
    new Jatekter($(".jatekter"), 3);
    this.tmodel = new TModel();
    this.info = new InfoView($(unicorn));

    $(window).on("elemKivalaszt", (event) => {
      const akt_j = this.tmodel.aktualisJatekos();
      event.detail.setErtek(akt_j);
      const jatekos = this.tmodel.kovetkezoJatekos();
      var elem;
      this.info.kiir(jatekos, elem);
      this.jatekosEllenorzes(jatekos);
    });
  }
  jatekosEllenorzes(jatekos) {
    if (jatekos === "👽") {
      $(".nyilUnicorn").css("visibility", "hidden");
      $(".nyilUfo").css("visibility", "visible");
      $(".kovetkezikU").html("");
    } else {
      $(".nyilUfo").css("visibility", "hidden");
      $(".nyilUnicorn").css("visibility", "visible");
      $(".kovetkezikUf").html("");
    }
  }
}
export default TController;
