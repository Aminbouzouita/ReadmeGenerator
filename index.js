const inquirer = require("inquirer");
const fs = require("fs");
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
}

init();
