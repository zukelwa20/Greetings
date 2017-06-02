// var inp = document.getElementById("specName");
// var hello = document.getElementById('greetMe');
// var error = document.getElementById('greetedMe');
// var but = document.getElementById("sub");
// var Language = document.getElementsByName('Language');
// var count = document.getElementById("counter");
// var clearButton = document.getElementById("resetButt");
//
// var namesGreeted = {};
//
// var countV = 0;
// var storedCount = localStorage.getItem("countV");
// if (storedCount) {
//     countV = Number(storedCount);
//     count.innerHTML = countV;
// }
// //for (var i = 0; i < namesGreeted.length; i++) {}
// but.addEventListener("click", () => {
//
//     var name = inp.value;
//
//     if (Language[0].checked === true && name.length > 0 && namesGreeted[name] === undefined) { //alikho
//         //  console.log('makho')
//         namesGreeted[name] = name; //store the name
//         hello.innerHTML = "Hello, " + name + "!"; //greet the name
//         countV += 1; // increment counter
//     } else if (Language[0].checked && name.length > 0 && namesGreeted[name] !== undefined) { //likhona igama
//         hello.innerHTML = "Hello, " + name + "!";
//         //  error.innerHTML = ""
//     } else if (Language[1].checked === true && name.length > 0 && namesGreeted[name] === undefined) {
//         namesGreeted[name] = name;
//         hello.innerHTML = "Molo , " + name + "!";
//         countV += 1;
//     } else if (Language[1].checked && name.length > 0 && namesGreeted[name] !== undefined) {
//         hello.innerHTML = "Molo kwakhona , " + name + "!";
//     } else if (Language[2].checked === true && name.length > 0 && namesGreeted[name] === undefined) {
//         namesGreeted[name] = name;
//         hello.innerHTML = "Hallo, " + name + "!";
//         countV += 1;
//     } else if (Language[2].checked && name.length > 0 && namesGreeted[name] !== undefined) {
//         hello.innerHTML = "Hallo weer, " + name + "!";
//     }
//     // //  inp.value = "";
//
//
//     // countV +=1;
//     localStorage.setItem("countV", countV);
//     count.innerHTML = countV;
//     //}
// });
//
// function resetB() {
//     var resB = document.getElementById("countV");
//     if (resB >= 0) {
//         document.getElementById("counter").innerHTML = countV = 0;
//     }
//     localStorage.clear();
// };
