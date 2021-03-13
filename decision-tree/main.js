const readline = require("readline");
const conversation = require('./example.dialogue.json');
const Dialogue = require("./decision-tree");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dialogueTree = new Dialogue(conversation);

function readCommand() {
    rl.question(dialogueTree.getResponse() + createOptions(), function (answerIndex) {
        const dialogueEnd = !!dialogueTree.chooseAnswer(answerIndex);

        if (dialogueEnd) {
            rl.write(dialogueTree.getResponse());
            rl.close();
        } else {
            readCommand();
        }
    })
}

function createOptions() {
    let options = "\nYour options are: ";
    const answers = dialogueTree.getAvailableAnswers();
    for (let i = 0; i < answers.length; i++) {
        options = options.concat(`\n[${i}] ${answers[i]}`);
    }
    options = options.concat("\n > ");
    return options;
}
readCommand();
