var assert = require('assert');
var app = require('../js/app');
var appJake = require('../js/jake');

describe('my first test', function() {
  it('should check first question', function() {
    assert.deepEqual(app.getQuestion(0), "first");
  });
  it('should check third question', function() {
    assert.deepEqual(app.getQuestion(2), "third");
  });

  it('Should increment 0 to get 5',         function() { assert(app.addFive(    0),     5); });
  it('Should increment 4 to get 9',         function() { assert(app.addFive(    4),     9); });
  it('Should increment -1008 to get -1003', function() { assert(app.addFive(-1008), -1003); });
  it('JAKE GIVE NUMBER 5',                  function() { assert(appJake.x, 5); });
});
