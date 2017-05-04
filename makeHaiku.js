// makeHaiku.js will be in charge of creating the Haiku! It should export your function that generates your haiku.

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

module.exports.createHaiku = createHaiku;