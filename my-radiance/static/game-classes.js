
// The file containing the abstract classes

/*
 * Class is a base class for OO JS Programming created by Josh Gertzen.
 * http://joshgertzen.com/object-oriented-super-class-method-calling-with-javascript/
 */
function Class() {};
Class.prototype.construct = function() {};
Class.prototype.toString = function() { return this.className; };
Class.prototype.className = "Class";
Class.extend = function(def) {
  var classDef = function() {
    if (arguments[0] !== Class) {
      this.construct.apply(this,arguments);
    }
  };

  var proto = new this(Class);
  var superClass = this.prototype;

  for (var n in def) {
    var item = def[n];
    if (item instanceof Function)
      item.$ = superClass;
    proto[n] = item;
  }

  classDef.prototype = proto;
  classDef.extend = this.extend;

  return classDef;
};

// Updatable class
var Updatable = Class.extend({
  className : "Updatable",
  update : function(delta) {}
});

// Collidable class
var Collidable = Updatable.extend({
  className : "Collidable",
  collide : function(other) {}
});

