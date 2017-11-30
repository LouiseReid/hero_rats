var assert = require("assert");
var Hero = require("../hero.js")
var Task = require("../task.js")

describe("Hero", function(){
  beforeEach(function(){
    hero = new Hero("Ryu", 100, "pizza");
    task1 = new Task("Defeat Sagat", 5, 10, "Food", false);
    task2 = new Task("Defeat Ken", 7, 9, "Money", true);
  });

  it("should have a name", function(){
    assert.strictEqual(hero.name, "Ryu")
  });
  it("should have health", function(){
    assert.strictEqual(hero.health, 100)
  });
  it("should have a favourite food", function(){
    assert.strictEqual(hero.favouriteFood, "pizza")
  });
  it("can talk, saying its name", function(){
    assert.strictEqual(hero.talk(), "I am Ryu")
  });
  it("should have a collection of tasks to complete which starts empty", function(){
    assert.strictEqual(hero.tasks.length, 0)
  });
  it("should be able to sort their tasks by difficulty, urgency or reward", function(){
    hero.addTasks(task1);
    hero.addTasks(task2);
    assert.strictEqual(hero.tasks.length, 2)
    assert.deepStrictEqual(hero.sortTasks(task1.reward), [task1, task2])
  });
  it("should be able to view tasks marked complete or incomplete", function(){
    hero.addTasks(task1);
    hero.addTasks(task2);
    assert.deepStrictEqual(hero.viewTask(true),[task2])
    assert.deepStrictEqual(hero.viewTask(false),[task1])
  })

})
