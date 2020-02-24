const prompt = require('inquirer').createPromptModule();
const path = require("path");
const fs = require('fs');

const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./htmlRenderer")

const teamMembers = [];
const idArray = [];

function start() {
  prompt([

    {
      type: 'list',
      name: 'title',
      messsage: 'What is your title?',
      choices: ['manager', 'engineer', 'intern']
    }
  ])

    .then(function (answers) {

      switch (answers.title) {
        case 'manager':
          prompt([
            {
              type: 'input',
              name: 'managerName',
              message: 'What is your name?'
            },
            {
              type: 'input',
              name: 'managerId',
              message: 'What is your id?'
            },
            {
              type: 'input',
              name: 'managerEmail',
              message: 'What is your email?'
            },
            {
              type: 'text',
              name: 'managerOfficeNumber',
              message: 'What is your office number?'
            }
          ]).then(function (answers) {
            let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber)
            teamArr.push(manager)
            idArr.push(answers.managerId);
          })
          break
        case 'engineer':
          prompt([
            {
              type: 'input',
              name: 'engineerName',
              message: 'What is your name?'
            },
            {
              type: 'input',
              name: 'engineerId',
              message: 'What is your id?'
            },
            {
              type: 'input',
              name: 'engineerEmail',
              message: 'What is your email?'
            },
            {
              type: 'text',
              name: 'engineerGithub',
              message: 'Provide a link to your github account.'
            }
            .then(function (answers){
              let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
              teamArr.push(engineer);
              idArr.push(answers.engineerId);
            })
          ])
          break
        case 'intern':
          prompt([
            {
              type: 'input',
              name: 'internName',
              message: 'What is your name?'
            },
            {
              type: 'input',
              name: 'InternId',
              message: 'What is your id?'
            },
            {
              type: 'input',
              name: 'internEmail',
              message: 'What is your email?'
            },
            {
              type: 'text',
              name: 'internSchool',
              message: 'What is your school?'
            }
              .then(function (answers) {
                let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub)
                teamArr.push(intern)
                idArr.push(answers.internId) 

            })
          ])
          break
      }
    })
    .catch(function (err) { console.log(err) })
}


class Employee {
  constructor(name, id, email, title) {
    this.name = name
    this.id = id
    this.title = title
  }

  getName() {
    console.log(this.name)
  }
  getId() {
    console.log(this.id)
  }

  getEmail() {
    console.log(this.email)
  }

  getRole() {
    console.log(this.title)
  }
  

}

class Manager extends Employee {
  constructor(name, id, email, title, officeNumber) {
    super(name, id, email, title)
    this.officeNumber = officeNumber
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return this.title;
  }
}

class Engineer extends Employee {
  constructor(name, id, email, title, github) {
    super(name, id, email, title)
    this.github = github
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return this.title;
  }
}


class Intern extends Employee {
  constructor(name, id, email, title, school) {
    super(name, id, email, title)
    this.school = school
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return this.title;
  }
}

start()
