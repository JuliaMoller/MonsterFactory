
// to share in facebook

// function shareFacebook (){
//     var params = "menubar=no,toolbar=no,status=no,width=570,height=570"; // for window

//     setTimeout(() => {
//         domtoimage.toPng(monsterCanvas)
//         .then(function (dataUrl) {

//             img.src = dataUrl;
//             modalImg.appendChild(img);

//             var i = document.getElementById("monsterCard");

//             console.log (encodeURIComponent(dataUrl));
//             let shareUrl = "http://www.facebook.com/sharer/sharer.php?u=" + img;
//             window.open(shareUrl,"NewWindow" , params);  

//         });
//     }, 200);
// }



function shareTwitter (){ 
    window.open(
        "https://twitter.com/share?url="+ encodeURIComponent(window.location.href)+"&text="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false; 
    }