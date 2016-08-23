$(document).ready(function() {
    //console.log($object);
      var checker = document.createElement("body");
      var checkExist = setInterval(function() {
        console.log(document.querySelector('object').contentDocument.querySelector('html').querySelector("body").hasChildNodes())
        if(document.querySelector('object').contentDocument.querySelector('html').querySelector("body").hasChildNodes()) {
          console.log("Exists!");
          clearInterval(checkExist);
        }
      }, 1000);
});
