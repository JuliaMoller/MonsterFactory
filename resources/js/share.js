//get and update url params of body parts and their hue values
function updateValue (className, sectionId, hueVal){
    let urlParams = new URLSearchParams(document.location.search);
        if (!urlParams.has(className)) {
            updateSearchParam(className, 0);            
        } else {
          document.getElementById(sectionId).value = urlParams.get(className);
          changeSvg(className, sectionId);
          //hueFunction (className, hueVal);
        }
        if (!urlParams.has(className + "_hue")) {
            updateSearchParam(className + "_hue", hueVal);
        } else {
            console.log(hueVal);
           hueFunction (className,  urlParams.get(className + "_hue"));
        }
}

//get and update url params of body hue values
function updateMonsterBody (){
    let urlParams = new URLSearchParams(document.location.search);
    if (!urlParams.has("monster-body_hue")) {
        updateSearchParam("monster-body_hue", 0);            
    } else {
        hueFunction ("monster-body", urlParams.get("monster-body_hue"));
    }
}

//get and update url params of canvas colour
function updateCanvasColor (){
    let urlParams = new URLSearchParams(document.location.search);
    if (!urlParams.has("canvasColor")) {
        updateSearchParam("canvasColor", 0);            
    } else {
        document.getElementById("monsterCanvas").style.backgroundColor = urlParams.get("canvasColor");
    }
}

//get and update url params of monster's name
function updateMonsterName (){
    let urlParams = new URLSearchParams(document.location.search);
    if (!urlParams.has("name")) {
        updateSearchParam("name", "");            
    } else {
        updateName(urlParams.get("name"));
    }
}

//update window value to standard values
window.onload = function() {
    updateValue ("eye", "eyes");
    updateValue ("mouth", "mouths");
    updateValue ("horn", "horns", 0);
    updateValue ("ear", "ears", 0);
    updateValue ("hair", "hairs", 0);
    updateValue ("tail", "tails", 0);
    updateValue ("paw", "paws", 0);
    updateMonsterBody ();
    updateCanvasColor ();
    updateMonsterName ();
};

//updates the search params URL
function updateSearchParam(param, value) {
    let urlParams = new URLSearchParams(document.location.search);
    urlParams.set(param, value);
    history.pushState({}, window.title, "?" + urlParams);
}

// share to facebook
function shareFacebook() {
    console.log(document.location.href);
    let url = "https://www.facebook.com/sharer/sharer.php?u=" + document.location.href;
    console.log(url);
    window.open(url, "");
}

// share to twitter
function shareTwitter (){ 
    var url ="https://twitter.com/share?url=" + encodeURIComponent(document.location);
    var monsterName = document.getElementById("monsterName").innerHTML;
    var text = "Hi, this is my new monster " + monsterName + " #monsterFactory";
    window.open(url + "&text=" + text, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');

}