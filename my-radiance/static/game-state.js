
// This is the game container with accessors for

var GameState;

(function() {
  GameState = {
    // Resources metadata
    resources : {},
    // Container div for the canvas
    container : undefined,
    // PIXI stage
    stage : undefined,
    // PIXI renderer
    renderer : undefined,
    // List of objects with update() function
    updatables : [],
    // Game handling functions
    game : {}
  };
})();

