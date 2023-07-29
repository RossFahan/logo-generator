//Required
const inquirer = require('inquirer');
const fs = require('fs');


// Import packages; import the module from shape.js
const { Shape, Triangle, Circle, Square } = require("./lib/shapes.js");

// Prompt the user for input
const inputPrompt = async () => {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color keyword or hexadecimal number:',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Triangle', 'Circle', 'Square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color keyword or hexadecimal number:',
      },
    ]);
  
    return answers;
  };
