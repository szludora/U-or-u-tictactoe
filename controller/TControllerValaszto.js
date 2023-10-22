import Jatekos from "../model/Jatekos.js";

let jatekos = 0;
let karakter1 = new Jatekos();
let karakter2 = new Jatekos();
$(function () {
  karakterValaszto();
  mehet();
});

function karakterValaszto() {
  $(".karakterB").each((index, button) => {
    $(button).on("click", () => {
      if (jatekos % 2 == 0) {
        karakter1.setKarakter($(button).attr("kar"));
        $(".valasztott1").removeClass("valasztott1");
        $(button).addClass("valasztott1");
      } else {
        karakter2.setKarakter($(button).attr("kar"));
        $(".valasztott2").removeClass("valasztott2");
        $(button).addClass("valasztott2");
      }
      jatekos++;
    });
  });
}

function mehet() {
$(".start").on("click", function () {
    if (
      typeof karakter1.getKarakter() !== "undefined" &&
      typeof karakter2.getKarakter() !== "undefined"
    ) {
      const karakter1Param = encodeURIComponent(karakter1.getKarakter());
      const karakter2Param = encodeURIComponent(karakter2.getKarakter());
      const url = `jatek.html?karakter1=${karakter1Param}&karakter2=${karakter2Param}`;
      window.location.href = url;
    } else {
      alert("Kérlek, válassz karaktereket!");
    }
  });
  
  }
  
