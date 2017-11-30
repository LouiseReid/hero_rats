var Hero = function(name, health, favouriteFood){
   this.name = name;
   this.health = health;
   this.favouriteFood = favouriteFood;
   this.tasks = [];
}

Hero.prototype = {
   talk: function(name){
      return "I am " + this.name;
   }
}

module.exports = Hero;
