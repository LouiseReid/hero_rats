var assert = require("assert");
var Food = require("../food.js")

describe("Food", function(){
  beforeEach(function(){
    food = new Food("pizza", 10);
    food2 = new Food("pizza2", 10);

  });
  it("should have a name", function(){
    assert.strictEqual(food.name, "pizza")
  });
  it("should have a replenishment value", function(){
    assert.strictEqual(food.replenishValue, 10)
  })

})
