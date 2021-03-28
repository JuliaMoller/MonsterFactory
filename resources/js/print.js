function printMonster (){
    // dom to image
    setTimeout(() => {
        domtoimage.toPng(monsterCanvas)
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


