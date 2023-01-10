import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import * as fs from 'fs'

const rl = readline.createInterface({ input, output });

const appNum = Math.floor(Math.random(2)) + 1

let answer = await rl.question('Программа загадала 1 или 2. Угадай какое число! ');
let result

if (answer == appNum) {
    console.log("Ты угадал")
    result = 1
    writeResultToLog(result)
    // answer = await rl.question('Попробуешь еще раз!');
} else {
    console.log("Ты не угадал")
    result = 0
    writeResultToLog(result)
    // answer = await rl.question('Попробуй еще раз!');
}
    
rl.close();

// По результатам анализа программа выводит в консоль следующие данные:

// общее количество партий;
// количество выигранных / проигранных партий;
// процентное соотношение выигранных партий.

let fileContent = fs.readFileSync("log.txt", "utf8");

console.log(`Общее количество партий: ${fileContent.length + 1}`);
let winSummary = 0
let arr = fileContent.split('')

arr.forEach(function(item, i, arr) { // в цикле по всем 
    winSummary = winSummary + Number(item)
})
console.log(`Количество выигранных партий: ${winSummary}`);
let loseSummary = arr.length + 1 - winSummary
console.log(`Количество проигранных партий: ${loseSummary}`);
let winProcent = winSummary / arr.length * 100
console.log(`Процентное соотношение выигранных партий: ${winProcent.toFixed(2)} %`);


function writeResultToLog(result) {
    let data = result.toString()
    fs.appendFile("log.txt", data, (err) => {
    if (err) console.log(err);
})}


