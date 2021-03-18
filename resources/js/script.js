
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