import Jatekter from "../view/Jatekter.js";
import TModel from "../model/TModel.js";
import InfoView from "../view/InfoView.js";

class TController {
  constructor() {
    this.gombok();
    this.jatekIndul();
  }

  gombok() {
    $("button").each((index, button) => {
      $(button).on("click", () => {
        const meret = $(button).attr("meret");
        $(".jatekter").html("");
        $(".unicorn p").html("");
        $(".ufo p").html("");
        new Jatekter($(".jatekter"), meret);
        this.info = new InfoView($(".info"));
      });
    });
  }

  jatekIndul() {
    var unicorn = $(".unicorn");
    var ufo = $(".ufo");
    new Jatekter($(".jatekter"), 3);
    this.tmodel = new TModel();
    this.info = new InfoView($(unicorn));

    $(window).on("elemKivalaszt", (event) => {
      unicorn.html("");
      ufo.html("");
      const akt_j = this.tmodel.aktualisJatekos();
      event.detail.setErtek(akt_j);
      const jatekos = this.tmodel.kovetkezoJatekos();
     
      let elem = jatekos === "👽" ? ufo : unicorn, szulo = jatekos === "👽" ? $(".unicorn") : $(".ufo");
      this.info.kiir(jatekos, elem);
      this.info.nyilak(szulo);
    });
  }
}

export default TController;
