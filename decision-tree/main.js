const readline = require("readline");
const conversation = require('./example.dialogue.json');
const Dialogue = require("./decision-tree");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const dialogueTree = new Dialogue(conversation);
let validOptions = [];

function readCommand(onlyProvideOptions = false) {
    const question = onlyProvideOptions ? createOptions() : dialogueTree.getResponse() + createOptions()
    rl.question(question, function (answerIndex) {
        if (!validOptions.includes(answerIndex.toString())) {
            rl.write(`\n\'${answerIndex}' is not a valid answer.\n\n`);
            readCommand(true);
            return;
        }
        const dialogueEnd = !!dialogueTree.chooseAnswer(answerIndex);

        if (dialogueEnd) {
            rl.write(dialogueTree.getResponse());
            rl.write("\n");
            rl.close();
        } else {
            readCommand();
        }
    })
}

function createOptions() {
    let options = "\nYour options are: ";
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
