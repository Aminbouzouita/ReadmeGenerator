const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const questions = [
    {
        type: "input",
        message: "Enter github username",
        name: "username"
    },
    {
        type: "input",
        message: "Enter project title",
        name: "title"
    },
    {
        type: "input",
        message: "Enter project descriptions",
        name: "description"
    },
    {
        type: "input",
        message: "Enter table of contents",
        name: "tablecontent"
    },
    {
        type: "input",
        message: "Enter usage purpose",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter License name",
        name: "licensename"
    },
    {
        type: "input",
        message: "Enter github contributor",
        name: "contributor"
    },
    {
        type: "input",
        message: "Enter test information",
        name: "test"
    },
    {
        type: "input",
        message: "Enter questions",
        name: "question"
    }
];

function writeToFile(fileName, data) {
}
function init() {
    inquirer.prompt(questions)
        .then(function (questions) {
            const queryUrl = `https://api.github.com/users/${questions.username}/repos?per_page=100`;
            axios.get(queryUrl).then(function (res) {
                console.log(res.data[1].owner.avatar_url);

            });
        });
};

init();