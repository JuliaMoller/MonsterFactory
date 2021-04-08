
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

// document.getElementById("twitterShare").addEventListener("click", function(){
//     var url ="https://twitter.com/share?url=" + encodeURIComponent(document.location);
//     var monsterName = document.getElementById("monsterName").value;
//     var text = "Hi, this is my new monster " + monsterName;
//     window.open(url + "&text=" + text);
//   })

// var largeImage = document.getElementById('largeImage');
// largeImage.style.display = 'block';
// largeImage.style.width=200+"px";
// largeImage.style.height=200+"px";
// var url=largeImage.getAttribute('src');
// window.open(url,'Image','width=largeImage.stylewidth,height=largeImage.style.height,resizable=1');

function shareTwitter (){ 
    var url ="https://twitter.com/share?url=" + encodeURIComponent(document.location);
    var monsterName = document.getElementById("monsterName").innerHTML;
    var text = "Hi, this is my new monster " + monsterName;
    window.open(url + "&text=" + text, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');

    // window.open(
    //     "https://twitter.com/share?url="+ encodeURIComponent(window.location.href)+"&text="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    //     return false; 
    }