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
        if (!!this.currentNode?.answers?.length > 0) {
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

    getStatAdjustment() {
        return {
            charisma: (this.currentNode?.statAdjustment?.charisma || 0),
            intelligence: (this.currentNode?.statAdjustment?.intelligence || 0),
            cunning: (this.currentNode?.statAdjustment?.cunning || 0),
            strength: (this.currentNode?.statAdjustment?.strength || 0)
        };
    }
}

module.exports = Dialogue