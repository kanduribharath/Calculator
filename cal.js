function calculate() {
  try {
    var x = document.getElementById("values");
    x.value = eval(x.value);
  } catch (error) {
    x.value = x.value.innerHtml = "error";
  }
}

function turnoff() {
  var x = document.getElementById("values");
  x.style.visibility = "hidden";
}
function turnon() {
  var x = document.getElementById("values");
  x.style.visibility = "visible";
}

function getvalues(num) {
  var x = document.getElementById("values");
  x.value += num;
}
function clearone() {
  var x = document.getElementById("values");
  x.value = x.value.slice(0 - 1);
}
function clearall() {
  var x = document.getElementById("values");
  x.value = " ";
}


