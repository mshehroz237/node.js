//called fs to use file system
const fs = require('fs');

//called inquirer for prompts
const inquirer = require('inquirer');
//using the experted module
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        //creating a question of input type
        type: 'input',
        name: 'title',
        message: 'What is your project title'
    },
    {
        //creating a question of input type

        type : 'input',
        name: 'description',
        message : 'Enter description of your project'
    },
    {
        //creating a question of input type

        type: 'input',
        name: 'contribution',
        message: 'Enter your contribution information'
    },
    {
        //creating a question of input type

        type: 'input',
        name: 'installation',
        message: 'Enter your installation information'
    },
    {
        //creating a question of input type

        type: 'input',
        name: 'usage',
        message: 'Enter your usage information'
    },
    {
         //creating a question of input type

        type: 'input',
        name: 'test',
        message: 'Enter test information'
    },
    {
        //creating a question of list type

        type: 'list',
        name: 'license',
        message: 'Chose the appropritae lisence for this project',
        choices : [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        //creating a question of input type

        type: 'input',
        name : 'github',
        message: 'enter your github username'
    },
    {
        //creating a question of input type

        type: 'input',
        name: 'email',
        message: 'enter your email : '
    }
];

// TODO: Create a function to write README file
function writeToFile(content) {
    //caling writefile function and passing 3 parameters first the file name second the data in it and third is the call back function
fs.writeFile('README.MD', content, err =>{
    if (err) throw err
    console.log('successfully creted')
})
}

// TODO: Create a function to initialize app
function init() {
    //getting the answers from object and passing it in the template
    inquirer.prompt(questions).then( (answers)=>{
        var template = generateMarkdown(answers);
        writeToFile(template);
    } )
}
//calling init function
init();

