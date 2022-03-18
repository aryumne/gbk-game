sessionStorage.clear();
var headLine = "GAME SUIT";
var btnText = "Gas Skuy...";
var btnReset = "";
var menang = document.getElementById("menang");
var kalah = document.getElementById("kalah");
var seri = document.getElementById("seri");
menang.style.display = "none";
kalah.style.display = "none";
seri.style.display = "none";

document.getElementById("headline").innerHTML = headLine;
document.getElementById("showOption").innerHTML = btnText;
document.getElementById("reset").innerHTML = btnReset;

function check(text) {
  var randomMath = Math.random();
  if (randomMath < 0.33) {
    //Computer choice "Gunting"
    banding("Gunting", text);
  } else if (randomMath >= 0.33 && randomMath < 0.66) {
    //Computer choice "Batu"
    banding("Batu", text);
  } else {
    //Computer choice "Kertas"
    banding("Kertas", text);
  }
}

function banding(fromComputer, fromPlayer) {
  if (fromComputer == "Gunting") {
    if (fromComputer == fromPlayer) {
      tampilkanHasil("Seri");
    } else if (fromPlayer == "Kertas") {
      tampilkanHasil("Kalah");
    } else if (fromPlayer == "Batu") {
      tampilkanHasil("Menang");
    }
  } else if (fromComputer == "Batu") {
    if (fromComputer == fromPlayer) {
      tampilkanHasil("Seri");
    } else if (fromPlayer == "Kertas") {
      tampilkanHasil("Menang");
    } else if (fromPlayer == "Gunting") {
      tampilkanHasil("Kalah");
    }
  } else if (fromComputer == "Kertas") {
    if (fromComputer == fromPlayer) {
      tampilkanHasil("Seri");
    } else if (fromPlayer == "Gunting") {
      tampilkanHasil("Menang");
    } else if (fromPlayer == "Batu") {
      tampilkanHasil("Kalah");
    }
  } else {
    alert("Apa hayoo!!!");
  }
}

function tampilkanHasil(hasil) {
  headLine = hasil;
  btnText = "Main lagi yok";
  var emot;
  if (hasil == "Menang") {
    menang.style.display = "block";
    kalah.style.display = "none";
    seri.style.display = "none";
  } else if (hasil == "Seri") {
    menang.style.display = "none";
    kalah.style.display = "none";
    seri.style.display = "block";
  } else {
    menang.style.display = "none";
    kalah.style.display = "block";
    seri.style.display = "none";
  }
  modal.style.display = "none";
  var btnReset =
    '<button class="resetButton" onClick="reset()"> Reset </button>';
  document.getElementById("headline").innerHTML = headLine;
  document.getElementById("showOption").innerHTML = btnText;
  document.getElementById("reset").innerHTML = btnReset;
}

function reset() {
  headLine = "GAME SUIT";
  btnText = "Gas Skuy...";
  btnReset = "";
  menang.style.display = "none";
  kalah.style.display = "none";
  seri.style.display = "none";
  document.getElementById("headline").innerHTML = headLine;
  document.getElementById("showOption").innerHTML = btnText;
  document.getElementById("reset").innerHTML = btnReset;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("showOption");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  var check = confirm("Batalkan permainan?");
  if (check === true) {
    modal.style.display = "none";
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    var check = confirm("Batalkan permainan?");
    if (check === true) {
      modal.style.display = "none";
    }
  }
};
