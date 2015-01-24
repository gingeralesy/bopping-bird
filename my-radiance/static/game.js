
// Main game behavior

(function(state) {
  var elapsed;
  var renderer;
  var stage;
  
  var init = function() {
    // DIV container for canvas element
    state.container = $("#main");
    // PIXI stage
    stage = new PIXI.Stage(0x66FF99);
    renderer = PIXI.autoDetectRenderer(800,600);

    state.stage = stage;
    state.renderer = renderer;
  };

  // Update function
  var update = function() {
    var now = Date.now();
    var delta = (now - elapsed) * 0.001;

    $.each(state.updatables,function(i,u) {
      u.update(delta);
    });
    
    renderer.render(stage);
    elapsed = now;
    
    requestAnimFrame(update);
  };

  var launch = function() {
    // Add objects here
    var background =
      new StaticImage("img/rainbow_candy_shop.jpg",0,0,
                      renderer.width,renderer.height);    
    var muffin = new Bouncy("img/muffin.png");
    var burger = new Bouncy("img/burger.png");
    state.updatables.push(muffin);
    state.updatables.push(burger);

    state.stage.addChild(background.sprite);
    state.stage.addChild(muffin.sprite);
    state.stage.addChild(burger.sprite);

    elapsed = Date.now();
    state.container.append($(renderer.view));
    requestAnimFrame(state.game.update);
  };
  
  state.game.init = init;
  state.game.update = update;
  state.game.launch = launch;
})(GameState);
