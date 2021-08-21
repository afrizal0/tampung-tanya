const fs = require('fs');
const readline = require('readline');
fs.readFile('question.txt', function(err, data) {
    if(err) throw err;
    var array = data.toString().split("\n");
    let index = Math.floor(Math.random() * array.length)
    console.log(`You have ${array.length} question you can generate`)
    console.log(`[${index}] ${array[index]}`)
});
