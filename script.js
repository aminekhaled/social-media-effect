/*-------- Js code -----------*/

var social_media_box = document.getElementsByClassName('social-media-box')[0],
   hide = document.getElementsByClassName('hide')[0],
   show = document.getElementsByClassName('show')[0];

   hide.onclick = function (){
      social_media_box.style.transform = "translateX(-60px)";
      show.style.visibility = "unset";
   }

   show.onclick = function (){
      social_media_box.style.transform = "translateX(0px)";
      show.style.visibility = "hidden";
   }



