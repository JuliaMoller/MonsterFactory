function printMonster (){
    // transform all objects inside the div to img
    var objs =  document.querySelectorAll("#monsterCanvas object");
    var monsterBg = document.getElementById("monsterCanvas");
    var monsterDiv = document.createElement("div");
    monsterDiv.setAttribute("class", "parent");
   // monsterDiv.style.backgroundColor = monsterBg.style.backgroundColor;

    for (var i = 0; i < objs.length; i++) {
        var data = objs[i].getAttribute("data");
        var className = objs[i].getAttribute("class");
        var style = objs[i].getAttribute("style");

        var img = document.createElement("img");
        img.src = data;
        img.setAttribute("class", className);
        img.setAttribute("style", style);
    
        console.log(img);
    
        monsterDiv.appendChild(img);
    }

   document.body.appendChild(monsterDiv);
   
    // dom to image

    setTimeout(() => {
        domtoimage.toPng(monsterDiv)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    }, 200);

}


