
// to change canvas backgorund
function changeCanvasColor () {
    let color = document.getElementById("colorInputColor").value;
    document.getElementById("monsterCanvas").style.backgroundColor = color;
}

// to change monster's paws
function changePaws () {
    let paws = document.getElementById("monsterPaws").value;
    document.getElementsByClassName("paw")[0].setAttribute("data", "svg/monster/paws2.svg");
}

// to change monster's body color
function changeMonsterBody () {
     document.getElementById("monsterBody").style.filter = "saturate(100%) hue-rotate(5deg)";
}

// to change monster's mounth
var mouths = [  
    "resources/svg/monster/mouth1.svg", 
    "resources/svg/monster/mouth2.svg", 
    "resources/svg/monster/mouth3.svg"
]
function changeMouth() {
    var m = document.getElementById("mouths").value;
    document.getElementsByClassName("mouth")[0].setAttribute("data", mouths[m]);
}