
// Just something I can test things with.

var checkDependencies = function() {
  var errors = [];
  if ("getGamepads" in navigator)
  {
    errors.push("Gamepads are not supported by your browser.");
  }
  return errors;
};

$(function() {
  var errors = checkDependencies();
  
  if ($.isArray(errors) && !!errors.length) {
    var main = $("#main");
    $("<p>", { text : "Error!" }).appendTo(main);
    $.each(dependenciesErrors,function(i,error) {
      $("<p>",{ text : error }).appendTo(main);
    });
  } else {
    // Initialize features
    GameState.game.init();
    GameState.resources.path = "/static/my-radiance/";

    // Launch game
    GameState.game.launch();
  }
});

