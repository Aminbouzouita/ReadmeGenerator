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
        message: "Enter project installations",
        name: "installation"
    },
    {
        type: "input",
        message: "Enter project usage",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter project credis",
        name: "credits"
    },
    {
        type: "input",
        message: "Enter project License",
        name: "license"
    },
    {
        type: "input",
        message: "Enter github contributor",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter project test",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter project questions",
        name: "questions"
    }
];
function writeToFile(answers) {
    let markdownstr = generatemarkdown(answers);
    fs.writeFile(`README.md`, markdownstr, function (err) {
        if (err) {
            console.log(err); 
            return;
        }
    })
}
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            const queryUrl = `https://api.github.com/users/${answers.username}/events/public`;
            axios.get(queryUrl).then(function (res) {
                answers.avatar_url = res.data[0].actor.avatar_url;
                answers.email = res.data[0].payload.commits[0].author.email;
                writeToFile(answers);
            });
        });

};

init();
