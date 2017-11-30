var assert = require("assert");
var Hero = require("../hero.js")

describe("Hero", function(){
  beforeEach(function(){
    hero = new Hero("Ryu", 100, "pizza")
  });

  it("should have a name", function(){
    assert.strictEqual(this.name, "Ryu")
  });
  it("should have health", function(){
    assert.strictEqual(this.health, 100)
  });
  it("should have a favourite food", function(){
    assert.strictEqual(this.favouriteFood, "pizza")
  });
  it("can talk, saying its name", function(){
    assert.strictEqual(hero.talk(), "I am Ryu")
  });
  it("should have a collection of tasks to complete which starts empty", function(){
    assert.strictEqual(hero.tasks.length, 0)
  });

})
