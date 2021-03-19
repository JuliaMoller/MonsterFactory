
// to change canvas backgorund
function changeCanvasColor () {
    let color = document.getElementById("colorInputColor").value;
    document.getElementById("monsterCanvas").style.backgroundColor = color;
}

// to change monster's body color
function changeMonsterBody () {
     document.getElementById("monsterBody").style.filter = "saturate(85%) hue-rotate(250deg)";
}

// to change monster's mounth
var mouths = [  
    "resources/svg/monster/mouth1.svg", 
    "resources/svg/monster/mouth2.svg", 
    "resources/svg/monster/mouth3.svg"
]
function changeMouth() {
    var i = document.getElementById("mouths").value;
    document.getElementsByClassName("mouth")[0].setAttribute("data", mouths[i]);
}

// to change monster's paws
var paws = [  
    "resources/svg/monster/paws1.svg", 
    "resources/svg/monster/paws2.svg", 
    "resources/svg/monster/paws3.svg"
]
function changePaws () {
    let i = document.getElementById("paws").value;
    document.getElementsByClassName("paw")[0].setAttribute("data", paws[i]);
}

// to change monster's tails
var tails = [  
    "resources/svg/monster/tail1.svg", 
    "resources/svg/monster/tail2.svg", 
    "resources/svg/monster/tail3.svg"
]
function changeTails () {
    let i = document.getElementById("tails").value;
    document.getElementsByClassName("tail")[0].setAttribute("data", tails[i]);
}

// to change monster's horns
var horns = [  
    "resources/svg/monster/horn1.svg", 
    "resources/svg/monster/horn2.svg", 
    "resources/svg/monster/horn3.svg"
]
function changeHorns () {
    let i = document.getElementById("horns").value;
    document.getElementsByClassName("horn")[0].setAttribute("data", horns[i]);
}

// to change monster's horns
var ears = [  
    "resources/svg/monster/ears1.svg", 
    "resources/svg/monster/ears2.svg", 
    "resources/svg/monster/ears3.svg"
]
function changeEars () {
    let i = document.getElementById("ears").value;
    document.getElementsByClassName("ear")[0].setAttribute("data", ears[i]);
}

// to change monster's hairs
var hairs = [  
    "resources/svg/monster/hair1.svg", 
    "resources/svg/monster/hair2.svg", 
    "resources/svg/monster/hair3.svg"
]
function changeHairs () {
    let i = document.getElementById("hairs").value;
    document.getElementsByClassName("hair")[0].setAttribute("data", hairs[i]);
}