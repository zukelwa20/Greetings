function resetB() {
    var resB = document.getElementById("countV");
    if (resB >= 0) {
        document.getElementById("counter").innerHTML = countV = 0;
    }
  localStorage.clear();
};
