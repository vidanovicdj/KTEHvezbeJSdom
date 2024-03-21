let destinacija = document.getElementById("lista-destinacija");
console.log(destinacija);

let naslov = document.getElementsByClassName("title");
console.log(naslov);

let element = document.getElementsByTagName("li");
console.log(element);

let wrap = document.querySelector("#wrapper");
console.log(wrap);

let nekeDestinacije = document.querySelectorAll(".naziv");
console.log(nekeDestinacije);

let listaDestinacija = document.querySelector("#lista-destinacija");
console.log("Roditelj ovog cvora je ",listaDestinacija.parentNode);

let listaDestinacija2 = document.querySelector("#lista-destinacija");
console.log("Ovo su deca tog cvora ",listaDestinacija2.children);

let listaDestinacija3 = document.querySelector("#lista-destinacija");
console.log("Next sibling is: ", listaDestinacija3.nextElementSibling);
console.log("Previous sibling is: ", listaDestinacija3.previousElementSibling);

let banner = document.querySelector("#page-banner");
console.log("banner node name is ", banner.nodeName);

let destinacijaFrancuska = document.querySelector(".naziv");
destinacijaFrancuska.textContent = "BEOGRAD";

var dugmici = document.querySelectorAll(".obrisi");
console.log(dugmici);

Array.from(dugmici).forEach(function(dugme){
    dugme.addEventListener("click", function(e){
        const li = e.target.parentNode;
        ul = li.parentNode;
        ul.removeChild(li);
    })
})

let forme = document.forms;
console.log(forme);

let forma1 = document.forms["dodaj-destinaciju"];
console.log(forma1);