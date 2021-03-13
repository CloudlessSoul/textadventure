class Dialogue {

    constructor(node) {
        this.currentNode = node;
        this.answerMap = {};
        this.createAnswerMap();
    }

    getResponse() {
        return this.currentNode.response;
    }

    getAvailableAnswers() {
        return this.currentNode.answers.map((answer) => answer.answer);
    }

    chooseAnswer(index) {
        this.currentNode = this.answerMap[index];
        if (!!this.currentNode.answers) {
            this.createAnswerMap();
            return false;
        }
        return true;
    }

    getResult() {
        return this.currentNode.result;
    }

    createAnswerMap() {
        for (let i = 0; i < this.currentNode.answers.length; i++) {
            this.answerMap[i] = this.currentNode.answers[i];
        }
    }
}

module.exports = Dialogue