const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const outputPath = path.resolve(__dirname, "team.html");
const employeeRole = {
    type: "list",
    name: "role",
    message: "What employee type are you creating?",
    choices: ["Engineer", "Intern", "Done"]
};
const teamArr = [];

const employeeInput = [
    {
        type: "input",
        name: "name",
        message: "What is the Employee's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id number?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your title?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your business email?"
    }
];

const managerInput = [
    {
        type: "input",
        name: "name",
        message: "What is the Manager's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id number?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your title?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your business email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?"
    }
];

const engineerInput = [
    {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id number?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your title?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your business email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Github username?"
    }
];

const internInput = [
    {
        type: "input",
        name: "name",
        message: "What is the Intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id number?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your title?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your business email?"
    },
    {
        type: "input",
        name: "school",
        message: "What school do you attend?"
    }
];

function init() {
    managerQuestions();
}

function questions() {
    inquirer.prompt(employeeRole).then(employeeRole => {

        if (employeeRole.role === "Engineer") {
            inquirer.prompt(engineerInput).then(answers => {
                engineer = new Engineer(
                    answers.name,
                    answers.id,
                    answers.title,
                    answers.email,
                    employeeRole.role,
                    answers.github
                );
                //console.log(engineer);
                teamArr.push(engineer);
                questions();
            });
        } else if (employeeRole.role === "Intern") {
            inquirer.prompt(internInput).then(answers => {
                intern = new Intern(
                    answers.name,
                    answers.id,
                    answers.title,
                    answers.email,
                    employeeRole.role,
                    answers.school
                );
                console.log(answers.school);
                teamArr.push(intern);
                questions();
            });
        } else if (employeeRole.role === "Done") {
            console.log("End application");
            generateHTML(teamArr);
        }
    });
}

function managerQuestions() {
    inquirer.prompt(managerInput).then(answers => {
        manager = new Manager(
            answers.name,
            answers.id,
            answers.title,
            answers.email,
            employeeRole.role,
            answers.officeNumber
        );
        teamArr.push(manager);
        questions();
    });
}

init();

function generateHTML(teamArr) {
    //Create a render method that I call here with writefilesync
    // this renderer is a function that imports from the html renderer file
    fs.writeFileSync(outputPath, render(teamArr), "utf-8");
}