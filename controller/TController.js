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
        new Jatekter($(".jatekter"), meret);
        this.info = new InfoView($(".info"));
      });
    });
  }

  jatekIndul() {
    var unicorn = $(".unicorn p");
    var ufo = $(".ufo p");
    new Jatekter($(".jatekter"), 3);
    this.tmodel = new TModel();
    this.info = new InfoView($(".info"));

    $(window).on("elemKivalaszt", (event) => {
      unicorn.html("");
      ufo.html("");
      const akt_j = this.tmodel.aktualisJatekos();
      event.detail.setErtek(akt_j);
      const jatekos = this.tmodel.kovetkezoJatekos();
      console.log(jatekos);
      var elem;
      if (jatekos === "👽") {
        elem = unicorn;
      } else {
        elem = ufo;
      }
      this.info.kiir(jatekos, elem);
    });
  }
}

export default TController;
