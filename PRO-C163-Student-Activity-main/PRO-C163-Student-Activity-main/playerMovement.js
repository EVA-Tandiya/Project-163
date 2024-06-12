AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
        // Add the condition to play sound
        window.addEventListener("keydown", (e) => {
          if(
            e.key === "ArrowUp" ||
            e.key === "ArrowRight" ||
            e.key === "ArrowLeft" ||
            e.key === "ArrowDown" 
          )
          
          {
            var entity = document.querySelector("#sound2")
            entity.componenets.sound.playSound()
          }

        })
    },
  });


  