var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');
// var cmudictFile = readCmudictFile('./1.txt');

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

function createHaiku(struct, byCount){
    var res = [];
    for(var i=0; i<struct.length; i++){
        res.push(createHaikuLine(struct[i], byCount));

    }
    return res.join('\n');
}

function createHaikuLine(countList, byCount){
    var res = [];
    var count;
    for(var i=0; i<countList.length; i++){
        count = countList[i];
        res.push(getRandomWord(byCount[count]));
    }
    return res.join(' ');
}

function getRandomWord(wordList){
    var index = Math.floor(Math.random() * wordList.length);
    return wordList[index];
}

var data = formatData(cmudictFile);
var struct = [[5],[7],[5]];

console.log(createHaiku(struct, data.byCount));
