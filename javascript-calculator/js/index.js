var box = document.getElementById("display");

function toScreen(x) {
  box.value += x;
  if (x === 'c') {
    box.value = '';
  }
}

function answer() {
  var x = box.value;
  x = eval(x);
  box.value = x;
}

function power() {
  var x = box.value;
  x = eval(x * x);
  box.value = x;
}

function backspace() {
  var num = box.value;
  var len = num.length - 1;
  var new_num = num.substring(0, len);
  box.value = new_num;
}