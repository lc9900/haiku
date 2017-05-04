// parseDict.js will be in charge of reading and parsing our CMUdict.txt file. 
// This module can either export a function that returns the syllable data structure, or the data structure itself.

var fs = require("fs");

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}

function formatData(data){    
    var lines = data.toString().split("\n"), lineSplit;
    var res = {}, 
        count = 0,
        byWord = {},
        byCount = {};

    lines.forEach(function(line){    
        lineSplit = line.split("  ");    
        // console.log("The word " + lineSplit[0] + " has this phoneme    layout: " + lineSplit[1]);
        if (lineSplit[1].match(/\d/g) !== null) count = lineSplit[1].match(/\d/g).length;
        byWord[lineSplit[0]] = count;
    });
    res.byWord = byWord;
    res.byCount = formDataByCount(byWord);
    // console.log(res.byWord);
    return res;   
}

function formDataByCount(obj){
    var res = {}, count;
    for(word in obj){
        count = obj[word];
        if(!res.hasOwnProperty(count)) res[count] = [];
        res[count].push(word);
    }
    return res;
}

module.exports.formatData = formatData;
module.exports.readCmudictFile = readCmudictFile;