const readline = require("readline");
const conversation = require('./example.dialogue.json');
const Dialogue = require("./decision-tree");
const dialogue = require("./dialogue1");
const { stat } = require("fs");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dialogueTree = new Dialogue(dialogue);
let validOptions = [];

let characterStats = {
    "charisma": 0,
    "intelligence": 0,
    "strength": 0,
    "cunning": 0
}

function readCommand(onlyProvideOptions = false) {
    const question = onlyProvideOptions ? createOptions() : dialogueTree.getResponse() + createOptions()
    rl.question(question, function (answerIndex) {
        if (!validOptions.includes(answerIndex.toString())) {
            rl.write(`\n\'${answerIndex}' is not a valid answer.\n\n`);
            readCommand(true);
            return;
        }
        const dialogueEnd = !!dialogueTree.chooseAnswer(answerIndex);
        adjustStats(dialogueTree.getStatAdjustment());

        if (dialogueEnd) {
            rl.write(dialogueTree.getResponse());
            rl.write("\n");
            rl.close();
            console.log("Your character stats are: ", characterStats)
        } else {
            readCommand();
        }
    })
}

function createOptions() {
    let options = "\nYour response is: ";
    const answers = dialogueTree.getAvailableAnswers();
    validOptions = [];
    for (let i = 0; i < answers.length; i++) {
        validOptions.push(i.toString());
        options = options.concat(`\n[${i}] ${answers[i]}`);
    }
    options = options.concat("\n> ");
    return options;
}
readCommand();

function adjustStats(statAdjustment) {
    characterStats.strength += (statAdjustment.strength || 0);
    characterStats.intelligence += (statAdjustment.intelligence || 0);
    characterStats.cunning += (statAdjustment.cunning || 0);
    characterStats.charisma += (statAdjustment.charisma || 0);
}