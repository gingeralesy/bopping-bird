
// Just something I can test things with.

$(function() {
  if ("getGamepads" in navigator) {
    // Initialize features
    GameState.game.init();
    GameState.resources.path = "/static/my-radiance/";

    // Launch game
    GameState.game.launch();
  } else {
    $("#main").text("Gamepads are not supported by your browser. Please update.");
  }
});

