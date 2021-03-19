var parts = {
    "mouths": [  
        "resources/svg/monster/mouth1.svg", 
        "resources/svg/monster/mouth2.svg", 
        "resources/svg/monster/mouth3.svg"
    ],
    "paws": [  
        "resources/svg/monster/paws1.svg", 
        "resources/svg/monster/paws2.svg", 
        "resources/svg/monster/paws3.svg"
    ],
    "tails": [  
        "resources/svg/monster/tail1.svg", 
        "resources/svg/monster/tail2.svg", 
        "resources/svg/monster/tail3.svg"
    ],
    "horns": [  
        "resources/svg/monster/horn1.svg", 
        "resources/svg/monster/horn2.svg", 
        "resources/svg/monster/horn3.svg"
    ],
    "ears": [  
        "resources/svg/monster/ears1.svg", 
        "resources/svg/monster/ears2.svg", 
        "resources/svg/monster/ears3.svg"
    ],
    "eyes": [  
        "resources/svg/monster/eyes1.svg", 
        "resources/svg/monster/eyes2.svg", 
        "resources/svg/monster/eyes3.svg"
    ],
    "hairs": [
        "resources/svg/monster/hair1.svg", 
        "resources/svg/monster/hair2.svg", 
        "resources/svg/monster/hair3.svg"
    ],
}


// to change canvas backgorund
function changeCanvasColor () {
    let color = document.getElementById("colorInputColor").value;
    document.getElementById("monsterCanvas").style.backgroundColor = color;
}

// to change monster's body hue rotation
function hueFunction(className, hueVal) {
    var setAs = hueVal + "deg"
    document.getElementsByClassName(className)[0].setAttribute("style", "-webkit-filter:hue-rotate(" + setAs + ")");
  }

// to change monster's body parts
function changeSvg (className, sectionId) {
    var i = document.getElementById(sectionId).value;
    document.getElementsByClassName(className)[0].setAttribute("data", parts[sectionId][i]);
}
