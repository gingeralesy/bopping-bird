
// File containing game classes with defined behavior

var StaticImage;
var Bouncy;

(function(state) {
  // Static image
  StaticImage = Class.extend({
    className : "StaticImage",
    construct : function(imagePath,x,y,width,height) {
      this.texture = 
        PIXI.Texture.fromImage(state.resources.path + imagePath);
      this.sprite = new PIXI.Sprite(this.texture);
      
      this.sprite.anchor.x = this.sprite.anchor.y = 0.0;
      this.sprite.position.x = x;
      this.sprite.position.y = y;
      this.sprite.width = width;
      this.sprite.height = height;
    }
  });

  // Bouncy object
  Bouncy = Collidable.extend({
    className : "Bouncy",
    construct : function(imagePath) {
      this.texture = 
        PIXI.Texture.fromImage(state.resources.path + imagePath);
      this.sprite = new PIXI.Sprite(this.texture);

      this.sprite.anchor.x = this.sprite.anchor.y = 0.5;
      this.sprite.position.x = state.renderer.width / 2.0;
      this.sprite.position.y = state.renderer.height / 2.0;

      this.rotationSpeed = 1.2;
      this.speed = 150.0;

      this.direction = { x : 0.0, y : 0.0 };
      this.direction.x = Math.random() * 2.0 - 1.0;
      this.direction.y = 1.0 - Math.abs(this.direction.x);
      if (Math.random() * 1.0 < 0.5)
        this.direction.y *= -1;
    },
    update : function(delta) {
      this.sprite.rotation += this.rotationSpeed * delta;
      this.sprite.position.x += this.direction.x * this.speed * delta;
      this.sprite.position.y += this.direction.y * this.speed * delta;

      var y = this.sprite.position.y;
      var x = this.sprite.position.x;
      var width = this.sprite.width;
      var height = this.sprite.height;
      
      var top = y - (height / 2.0);
      var bottom = top + height;
      var left = x - (width / 2.0);
      var right = left + width;
      
      if (bottom > state.renderer.height) {
        this.direction.y *= -1;
        this.sprite.position.y -= (bottom - state.renderer.height);
      } else if (top < 0) {
        this.direction.y *= -1;
        this.sprite.position.y -= top;
      }

      if (right > state.renderer.width) {
        this.direction.x *= -1;
        this.sprite.position.x -= (right - state.renderer.width);
      } else if (left < 0) {
        this.direction.x *= -1;
        this.sprite.position.x -= left;
      }
    }
  });
})(GameState);
