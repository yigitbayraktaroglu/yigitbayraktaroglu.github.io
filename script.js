function bildirim() {
  alert("Bana tıkladığın için teşekkürler.");
}
function renk() {
  let btn = document.querySelector("#renk");
  if (btn.style.color == "red") {
    btn.style.color = "#fff";
  } else {
    btn.style.color = "red";
  }
}
function inputAl() {
  let input = document.getElementById("input1").value;
  console.log(input);
  alert(input);
}
new AnimOnScroll(document.getElementById("grid"), {
  minDuration: 0.4,
  maxDuration: 0.7,
  viewportFactor: 0.2,
});
