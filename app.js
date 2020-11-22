const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];

function renderHTML() {
    console.log("All team members have been added.")
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(team), "utf-8");
}

function managerQuestion() {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the manager's name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the manager's ID?",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the manager's email?",
            name: 'email',
        }, 
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'officeNumber',
        }, 
    ])
    .then((answers) => {
        const manager = new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.officeNumber,
        )
        team.push(manager);}
    )
}

function addQuestions() {
    return inquirer.prompt([
        {
        type: 'list',
        message: "Please select the role you would like to add.",
        choices: ['Intern' , 'Engineer' , 'No Additional'],
        name: 'role',
        }
    ]).then((answer) => {
        if (answer.role === "Intern") {
            return internQuestion()
        } else if (answer.role === "Engineer") {
            return engineerQuestion()
        } else {
            return renderHTML();
            
        }
    });
}

function internQuestion() {
    return inquirer.prompt([
    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the intern's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the intern's email?",
        name: 'email',
    }, 
    {
        type: 'input',
        message: 'Where does the intern go to school?',
        name: 'school',
    }])
    .then((answers) => {
        const newIntern = new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        )
        team.push(newIntern);
    }).then((answers) => {
    addQuestions()
    });
}
   
function engineerQuestion() {
    return inquirer.prompt([
    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
    },
    {
        type: 'input',
        message: "What is the engineer's ID?",
        name: 'id',
    },
    {
        type: 'input',
        message: "What is the engineer's email?",
        name: 'email',
    }, 
    {
        type: 'input',
        message: "What is the engineer's GitHub?",
        name: 'github',
    }, 
    ]).then((answers) => {
        const newEngineer = new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.github,
        )
        team.push(newEngineer);
    }).then((answers) => {
        addQuestions()}
    );
}

// function to initialize program
managerQuestion().then((answers) => {
    addQuestions();
})