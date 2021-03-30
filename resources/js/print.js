// to print image
function printMonster (){

    // dom to image
    setTimeout(() => {
        domtoimage.toPng(monsterCanvas)
        .then(function (dataUrl) {
            
            var img = new Image();
            img.src = dataUrl;
            img.setAttribute("class", "monsterFinalImage")
            var modalImg = document.getElementById ("monsterCard");

            modalImg.appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
    }, 200);

        // Get the modal
        var modal = document.getElementById("monsterModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on the button, open the modal
        modal.style.display = "block";

        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
}

// to save image
function saveMonster (){
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

// to share in facebook

function shareFacebook (){
    var params = "menubar=no,toolbar=no,status=no,width=570,height=570"; // for window

    setTimeout(() => {
        domtoimage.toPng(monsterCanvas)
        .then(function (dataUrl) {

            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img)

            console.log (dataUrl);
            let shareUrl = "http://www.facebook.com/sharer/sharer.php?u=" + img;
            window.open(shareUrl,"NewWindow" , params);  

        });
    }, 200);
}
