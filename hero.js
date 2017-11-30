var _ = require("lodash")

var Hero = function(name, health, favouriteFood){
   this.name = name;
   this.health = health;
   this.favouriteFood = favouriteFood;
   this.tasks = [];
}

Hero.prototype = {
   talk: function(name){
      return "I am " + this.name;
   },
   addTasks: function(task){
     this.tasks.push(task)
   },
   sortTasks: function(property){
     return _.sortBy(this.tasks, ["property"] )
   },
   viewTask: function(status){
     return _.filter(this.tasks, ["completed", status])
   }
}

module.exports = Hero;
