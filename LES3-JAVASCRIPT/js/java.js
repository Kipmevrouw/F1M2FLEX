
let fotonummer, fotobreedte, aantalfotos, fotoslider;

function setupFotoslider(){
    fotonummer = 0;
    fotobreedte = 200;
    fotoslider = document.getElementById("fotoslider");
    let volgendeKnop = document.getElementById("volgende-btn");
    let vorigeKnop = document.getElementById("vorige-btn");
    aantalfotos = fotoslider.children.length;
    console.log(aantalfotos);
    volgendeKnop.addEventListener('click', volgendeFoto);
}

function volgendeFoto(){
    fotonummer += 1;

    if (fotonummer === aantalfotos) {
        fotonummer = 0;
    }

    let afstandNaarLinks = -1 * (fotonummer * fotobreedte)

    fotoslider.style.left = afstandNaarLinks + "px";
}


window.addEventListener('DOMContentLoaded', setupFotoslider)