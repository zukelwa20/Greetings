var inp = document.getElementById("specName");
var hello = document.getElementById('greetMe');
var error = document.getElementById('greetedMe');
var but = document.getElementById("sub");
var Language = document.getElementsByName('Language');
var count = document.getElementById("counter");
var clearButton = document.getElementById("resetButt");
var storedCount = localStorage.getItem("countV");

var namesGreeted = {};
// if (storedCount) {
//     countV = Number(storedCount);
//     count.innerHTML = countV;
//}
//for (var i = 0; i < namesGreeted.length; i++) {}
storage();
but.addEventListener("click", () => {


nameFun();

counterFun();

resetB();

//
// resetB();
//
// storage();

});
