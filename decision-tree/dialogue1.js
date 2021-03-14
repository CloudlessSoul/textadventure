
let whereIsTheCaptain =
{
    "answer": "Where can I find the captain?",
    "response": "You're an eager one. He's on the bridge. But stay a while. As the chief medical officer it is my duty to perform a medical on all new recruits.",
    "answers": [{
        "answer": "Ok, but please make it quick.",
        "response": "Don't worry, this will take half an hour max.",
        "answers": []
    }, {
        "answer": "I haven't got time for this. Take me to the captain right now.",
        "response": "As the chief medical officer I have the right to detain you if you don't agree to the medical.",
        "statAdjustment": {
            "charisma": -5
        },
        "answers": []
    }]
}
let characterChoice = [];
let whoAreYou =
{
    "answer": "Who are you anyway?",
    "response": "Doctor Tazmas. Chief medical officer on this ship. But who are you?",
    "answers": characterChoice
}

characterChoice.push(
    whoAreYou,
    {
        "answer": "I am Human",
        "response": "A fellow human. I should have recognised that.",
        "answers": [whereIsTheCaptain],
        "statAdjustment": {
            "intelligence": 6,
            "strength": 5,
            "charisma": 6,
            "cunning": 5
        }
    },
    {
        "answer": "I am Klingon",
        "response": "I see. Well, that makes you the second Klingon in Starfleet, after Captain Worf of course.",
        "answers": [{
            "answer": "That man is without honour. He is not worthy of the title Klingon",
            "response": "...",
            "answers": [whereIsTheCaptain]
        }, whereIsTheCaptain],
        "statAdjustment": {
            "intelligence": 5,
            "strength": 10,
            "charisma": 3,
            "cunning": 1
        }
    },
    {
        "answer": "I am Ferengi",
        "response": "Who did you bribe to get into Starfleet? Are you sure you're Starfleet material?",
        "answers": [whereIsTheCaptain],
        "statAdjustment": {
            "intelligence": 8,
            "strength": 3,
            "charisma": 1,
            "cunning": 8
        }
    },
    {
        "answer": "I am Vulcan",
        "response": "I should have deduced that. Welcome aboard.",
        "answers": [whereIsTheCaptain],
        "statAdjustment": {
            "intelligence": 10,
            "strength": 6,
            "charisma": 5,
            "cunning": 1
        }
    }
);
const dialogue = {
    "response": "Welcome to the Enterprise! I will be your mentor as you join the ranks of Starfleet. Tell me, what race are you?",
    "answers": characterChoice
}

module.exports = dialogue;