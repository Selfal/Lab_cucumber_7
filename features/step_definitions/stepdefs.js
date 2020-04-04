const assert = require('assert');
const { Given, When, Then } = require('cucumber');


Given('в машине осталась лишь {int} порция кофе', function (int) {
  if (int < 1) {
    this.act = "вернуть деньги";
  }
});

Given('я заплатил {int}$', function (int) {
  if (int < 1) {
    this.act = "не выдавать кофе";
  }  
});

When('{string} кнопку', function (string) {
  if (string === 'не нажата'){
    this.act = 'не выдавать кофе'
  }
});

Then('мне должны {string}', function (expectedAnswer) {
  if (!this.act){
    this.act = 'выдать кофе'
  }
  assert.equal(this.act, expectedAnswer);
});