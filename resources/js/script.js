
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