const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const newMembers = [];
const template = require('./template');


inquirer
.prompt([
    {
        type: "input",
        message: "What is your team manager's name?",
        name: 'name',
    },
    {
        type: "input",
        message: "What's your employee ID?",
        name: 'id',
    },
    {
        type: "input",
        message: "What's your email address?",
        name: 'email',
    },
    {
        type: "input",
        message: "What's your office number?",
        name: 'office'
    }
])
.then(response => {
    const newManager = new Manager(response.name, response.id, response.email, response.office)
    newMembers.push(newManager);
    createTeam();

})

function createTeam(){
    inquirer
    .prompt([
        {
            type: "list",
            message: "Which role would you like to add?",
            choices: ['Engineer', 'Intern', 'Finish Build'],
            name: "role",
        }
    ])
    .then(response => {
        if (response.role === "Engineer"){
            engineerBuild();
        } else if (response.role === "Intern"){
            internBuild();
        } else {
            htmlFile();
        }
    })
}

function engineerBuild(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is their name?",
            name: 'name',
        },
        {
            type: "input",
            message: "What's their employee ID?",
            name: 'id',
        },
        {
            type: "input",
            message: "What's their email address?",
            name: 'email',
        },
        {
            type: "input",
            message: "What's their Github username?",
            name: 'github'
        }
    ])
    .then(response => {
        const newEngineer = new Engineer(response.name, response.id, response.email, response.github)
        newMembers.push(newEngineer);
        createTeam();
    });
}

function internBuild(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is their name?",
            name: 'name',
        },
        {
            type: "input",
            message: "What's their employee ID?",
            name: 'id',
        },
        {
            type: "input",
            message: "What's their email address?",
            name: 'email',
        },
        {
            type: "input",
            message: "What's their school?",
            name: 'school'
        }
    ])
    .then(response => {
        const newIntern = new Intern(response.name, response.id, response.email, response.school)
        newMembers.push(newIntern);
        createTeam();
    });
}

function htmlFile(){
    fs.writeFile('index.html', template(newMembers), err => {

    })
}