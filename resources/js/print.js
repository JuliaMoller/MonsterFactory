function printMonster (){
    // dom to image

    setTimeout(() => {
        domtoimage.toBlob(monsterCanvas)
        .then(function (blob) {
            saveAs(blob, "monster.png")
            // var img = new Image();
            // img.src = dataUrl;
            // document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    }, 200);

}


