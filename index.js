const prompt = require('inquirer').createPromptModule()

function questionsOne() {
prompt([
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?'
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },
  {
     type: 'input',
     name: 'id',
     message: 'What is your id?'
   },
   {
     type: 'list',
     name: 'role',
     messsage: 'What is your role??',
     choices: ['manager', 'engineer', 'intern']
   }
])

  .then(function (answers) {

    switch (answers.role) {
      case 'manager':
        prompt([
          {
            type: 'text',
            name: 'officeNumber',
            message: 'What is your office number?'
          }
        ])
        break
      case 'engineer':
        prompt([
          {
            type: 'text',
            name: 'github',
            message: 'Provide a link to your github account.'
          }
        ])
        break
      case 'intern':
        prompt([
          {
            type: 'text',
            name: 'officeNumber',
            message: 'What is your office number?'
          }
        ])
        break
    }

  })
}

questionsOne()


// class Employee {
//   constructor (name, id, email, title) {
//   this.name = name  
//   this.id = id 
//   this.title = email

//   getName() {
//     return this.name;
//   }
//   getId() {
//     return this.id;
//   }
//   getEmail() {
//     return this.email;
//   }
//   getRole() {
//     return 'Employee';
//   }
//  }
// }

// class Manager extends Employee {
//   constructor(name, id, email, title, officeNumber) {
//     super(name, id, email, title)
//     this.officeNumber = officeNumber
//   }

//   getOfficeNumber() {
//     return this.getOfficeNumber;
//   }
//   getRole() {
//     return 'Manager';
//   }
// }

// class Engineer extends Employee {
//   constructor (name, id, email, title, github) {
//     super(name, id, email, title)
//     this.github = github
//     getGithub(){
//       return this.github
//     }
//     getRole() {
//       return 'Engineer'
//     }
//   }
// }

// class Intern extends Employee {
//   constructor (name, id, email, title, school) {
//     super(name, id, email, title)
//     this.school = school
//     getSchool()
//     getRole(){
//       return 'Intern'
//     }
//   }
// }