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
        .then(function (questions) {
            const queryUrl = `https://api.github.com/users/${questions.username}/repos?per_page=100`;
            axios.get(queryUrl).then(function (res) {
                console.log(res.data[1].owner.avatar_url);

            });
        });
};

init();