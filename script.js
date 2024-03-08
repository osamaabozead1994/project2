let qw1 = document.getElementById("qw1");
let qw2 = document.getElementById("qw2");
let qw3 = document.getElementById("qw3");
let qw4 = document.getElementById("qw4");
let qw5 = document.getElementById("qw5");
let qw6 = document.getElementById("qw6");
let qw7 = document.getElementById("qw7");
let qw8 = document.getElementById("qw8");
let qw9 = document.getElementById("qw9");

let x = 0;

qw3.onclick = function () {
  x = 1;
};

qw4.onclick = function () {
  x = 2;
};

qw5.onclick = function () {
  x = 3;
};

qw6.onclick = function () {
  x = 4;
};

qw7.onclick = function () {
  if (x === 1) {
    let c = qw1.value * qw2.value;
    document.getElementById("qw9").innerHTML = c;
    x = 0;
  } else if (x === 2) {
    let c = qw1.value / qw2.value;
    document.getElementById("qw9").innerHTML = c;
    x = 0;
  } else if (x === 3) {
    let c = +qw1.value + +qw2.value;
    document.getElementById("qw9").innerHTML = c;
    x = 0;
  } else if (x === 4) {
    let c = qw1.value - qw2.value;
    document.getElementById("qw9").innerHTML = c;
    x = 0;
  } else {
    document.getElementById("qw9").innerHTML = c;
  }
  qw1.value = "";
  qw2.value = "";
};

qw8.onclick = function () {
  qw9.innerHTML = "";
  qw1.value = "";
  qw2.value = "";
};
