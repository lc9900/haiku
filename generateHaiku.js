// generateHaiku.js will be our main program. This file will require the export objects from makeHaiku and parseDict 
// and use them both to log your haiku to the console!

var makeHaiku = require('./makeHaiku');
var parseDict = require('./parseDict');

var cmudictFile = parseDict.readCmudictFile('./cmudict.txt');
var data = parseDict.formatData(cmudictFile);
// var struct = [[5],[7],[5]];
var struct = [
  [2,3],
  [1,3,3],
  [3,2]
];

console.log(makeHaiku.createHaiku(struct, data.byCount));