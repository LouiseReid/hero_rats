var assert = require("assert");
var Task = require("../task.js")

describe("Task", function(){
   beforeEach("Setup", function(){
      task = new Task("Defeat Sagat", 5, 10, "Food", false);
   });

   it("should have description", function(){
      assert.strictEqual(task.description, "Defeat Sagat")
   });

   it("should have difficulty", function(){
      assert.strictEqual(task.difficultyLevel, 5)
   });

   it("should have urgencyLevel", function(){
      assert.strictEqual(task.urgencyLevel, 10);
   });

   it("should have reward", function(){
      assert.strictEqual(task.reward, "Food");
   });

   it("should have complete status", function(){
      assert.strictEqual(task.completed, false);
   });


})
