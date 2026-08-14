// in this file you can append custom step methods to 'I' object
/* import { actor } from 'codeceptjs';

module.exports = {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
} */
const { actor } = require('codeceptjs')

module.exports = function () {
  return actor({})
}