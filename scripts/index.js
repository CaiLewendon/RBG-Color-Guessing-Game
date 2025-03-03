$(document).ready(function () {
  let numOfSquares = 6;
  let colors = [];
  let picked;

  let $squares = $('.square');
  let $displayedColor = $('#picked');
  let $status = $('#status');
  let $block = $('.top-bar');
  let $reset = $('#reset');
  let $level = $('.level');

  init();

  function generateColors(numCol){
    let colorsl = [];
    for (let i = 0; i < numCol; i++){
        var color = `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`;
        colorsl.push(color);
    }
    return colorsl;
  }

  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function resetGame(){
      colors = generateColors(numOfSquares);
      picked = colors[(getRandomInteger(0, numOfSquares - 1))];
      console.log(picked);  
      $displayedColor.text(picked);
     
      for (let i = 0; i < numOfSquares; i++){
          $squares.eq(i).css("background-color", colors[i]);
      }

      if (getSelectedLevel() === "EASY"){
          $squares.eq(3).hide();
          $squares.eq(4).hide();
          $squares.eq(5).hide();
      }else{
        $squares.eq(3).show();
        $squares.eq(4).show();
        $squares.eq(5).show();
      }
      
      $block.css("background-color", `#4682b4`);
  }

  function getSelectedLevel() {
    return $('.level.selected').text();
}

  function init(){
    $level.click(function () {
      $level.removeClass('selected'); 
      $(this).addClass('selected'); 
      console.log(getSelectedLevel());
      if (getSelectedLevel() === "HARD"){
        numOfSquares = 6;
      }else{
        numOfSquares = 3;
      }
      resetGame();
  });
  resetGame();
  }

  $squares.eq(0).click(function() {
    let clickedColor = $(this).css("background-color");
    if (clickedColor === picked) {
        $status.text("CORRECT");
        $reset.text("PLAY AGAIN?");
        $block.css("background-color", picked);
        $squares.each(function() {
            $(this).css("background-color", picked);
        });
    } else {
        $status.text("TRY AGAIN");
        $(this).css("background-color", "#3b3838");
    }
  })
  $squares.eq(1).click(function() {
    let clickedColor = $(this).css("background-color");
    if (clickedColor === picked) {
        $status.text("CORRECT");
        $reset.text("PLAY AGAIN?");
        $block.css("background-color", picked);
        $squares.each(function() {
            $(this).css("background-color", picked);
        });
    } else {
        $status.text("TRY AGAIN");
        $(this).css("background-color", "#3b3838");
    }
  })
  $squares.eq(2).click(function() {
    let clickedColor = $(this).css("background-color");
    if (clickedColor === picked) {
        $status.text("CORRECT");
        $reset.text("PLAY AGAIN?");
        $block.css("background-color", picked);
        $squares.each(function() {
            $(this).css("background-color", picked);
        });
    } else {
        $status.text("TRY AGAIN");
        $(this).css("background-color", "#3b3838");
    }
  })
  $squares.eq(3).click(function() {
    let clickedColor = $(this).css("background-color");
    if (clickedColor === picked) {
        $status.text("CORRECT");
        $reset.text("PLAY AGAIN?");
        $block.css("background-color", picked);
        $squares.each(function() {
            $(this).css("background-color", picked);
        });
    } else {
        $status.text("TRY AGAIN");
        $(this).css("background-color", "#3b3838");
    }
  })
  $squares.eq(4).click(function() {
    let clickedColor = $(this).css("background-color");
    if (clickedColor === picked) {
        $status.text("CORRECT");
        $reset.text("PLAY AGAIN?");
        $block.css("background-color", picked);
        $squares.each(function() {
            $(this).css("background-color", picked);
        });
    } else {
        $status.text("TRY AGAIN");
        $(this).css("background-color", "#3b3838");
    }
  })
  $squares.eq(5).click(function() {
    let clickedColor = $(this).css("background-color");
    if (clickedColor === picked) {
        $status.text("CORRECT");
        $reset.text("PLAY AGAIN?");
        $block.css("background-color", picked);
        $squares.each(function() {
            $(this).css("background-color", picked);
        });
    } else {
        $status.text("TRY AGAIN");
        $(this).css("background-color", "#3b3838");
    }
  })

  $reset.click(function() {
    resetGame();
    $status.text("");
    $(this).text("NEW COLOR");
  })
});