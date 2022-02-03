const knap = document.querySelector("button");
const img = document.querySelector("img");
let tal = 1;

knap.addEventListener("click", skiftBillede);

function skiftBillede() {
  if (tal < 8) {
    //tæl op
    tal++;
    console.log(img[tal]);
    img.src = "fotos/img" + tal + ".png";
  } else {
    tal = 1;
    img.src = "fotos/img" + tal + ".png";
  }
}
