(function() {
  'use strict';

  var canvas = document.getElementById("myCanvas"); 
  var context = canvas.getContext("2d"); 
  context.strokeStyle = "red";
  context.fillStyle = "rgba(0, 0, 255, 0.5)";
  context.fillRect(10, 10, 100, 100);   
  context.strokeRect(10, 10, 100, 100);


  var mice = document.querySelectorAll("#mouseContainer img");

  var mouse = null;
  for (var i=0; i < mice.length; i++) {
      mouse = mice[i];

      //event to copy data(id) as text
      mouse.addEventListener('dragstart', function (event) {
          event.dataTransfer.setData("text/plain", this.id); 
      });
  }

  var cat = document.getElementById("cat");
  //event to allow dragover cat
  cat.addEventListener("dragover", function(event) {
    event.preventDefault();

  });


  //event to allow drop on
  cat.addEventListener("drop", function(event) {
    event.preventDefault();
    var mouseHash = {
      mouse1: 'NOMNOMNOM',
      mouse2: 'Meow',
      mouse3: 'Purrrrrr ...'
      };

      var catHeading = document.getElementById('catHeading');
      var mouseID = event.dataTransfer.getData("text/plain");
      catHeading.innerHTML = mouseHash[mouseID];
    
      var mousey = document.getElementById(item);
      mousey.parentNode.removeChild(mousey);
      event.preventDefault();


  });


  

})();