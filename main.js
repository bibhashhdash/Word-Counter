function count() {
  var input = document.getElementById("input").value.trim();
  if (input.length == 0) {
    document.getElementById("ans").innerHTML = "Please enter some text";
  }
  else if (input.length >= 1) {
    var split = input.split(" ");
    var n = split.length;
    document.getElementById("ans").innerHTML = "Word Count : " + n;
  }
}

function reset() {
  document.getElementById("input").value = null;
  document.getElementById("ans").innerHTML = " ";
}
