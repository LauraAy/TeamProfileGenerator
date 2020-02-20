const prompt = require('inquirer').createPromptModule()

 prompt([
  {
    type: 'input',
    name: 'role',
    message: 'Are you a manager, engineer, or intern?'
  },
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
   }

])

.then(({role, name, email, id}) =>{

  if (role.value === 'manager') {
  console.log('manager')
  }

 else if (role.value === 'engineer') {
    console.log('engineer')
  }
})


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