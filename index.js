
// Importing all external modules created in lib
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Importing all other required exteral modules
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Starter code variables - which are used in generating html, writing file to output
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");

// Variables
// Array for storing Selected team members
let teamBuider = [];

// Global Variables
let userTeamOption;     // Capture Manager's option choice for section when returned from inquirer 
let infoHTML;           // Used to store HTML template generated 

// function to write README file
function writeToFile(fileOutPath, htmlData) {

    fs.writeFile(outputPath, infoHTML, (error) => {

        return error 
        ? console.error(err) 
        : console.log('success')
    });
}


// START of Code to gather information about the development team members, and render the HTML file.

// Function for displaying / prompting user with questions
// ******** Staff - Manager (Prompts) *********
const promptUser1 = (options) => {

    if (options === false) { 
        
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'Please enter your Team Manager’s Name:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter a Name for your Manager!'
                }
                return true
            }
        },
    
        {
            type: 'input',
            name: 'managerID',
            message: 'Please enter your Team Manager’s Employment ID:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter an Employment ID for your Manager!'
                }
                return true
            }
        },

        {
            type: 'input',
            name: 'managerEmail',
            message: 'Please enter your Team Manager’s Email Address:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter an Email Address for your Manager!'
                }
                return true
            }
        },

        {
            type: 'input',
            name: 'managerOfficeNo',
            message: ' Please enter your Team Manager’s Office number:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter an Office No for your Manager!'
                }
                return true
            }
        },
        
        {
            type: 'list',
            name: 'teamOption',
            message: 'Please enter choice of individual\'s for your staff from the options given?',
            choices: [
                'Add an Engineer', 
                'Add an Intern', 
                'Finish building the team',
            ],
        },
    ]) 
    .then((answers) => {

        // Creating new Manager Object
        const manager = new Manager( 
            answers.managerName,
            answers.managerID,
            answers.managerEmail,
            answers.managerOfficeNo
        );

        // Create new TEAM array beginning with Manager Object
        teamBuider.push(manager);
       // Capture Manager's option choice for section when returned from inquirer
        userTeamOption = answers.teamOption;
    });


    // Test variable listOpts - false
    } else {
        // ********* Options Only (Prompt) *********
        console.log('current option status-2: ', options); 
        return inquirer.prompt ([
        {
            type: 'list',
            name: 'teamOption',
            message: 'Please enter choice of individual\'s for your staff from the options given?',
            choices: [
                'Add an Engineer', 
                'Add an Intern', 
                'Finish building the team',
            ],
        },
        ])
        .then((answers) => {
            // Capture Manager's option choice for section when returned from inquirer (use with 'if else')
            userTeamOption = answers.teamOption;
        });
    }
};

// ******** Staff - Engineer (Prompts) ********
const promptUser2 = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter your Engineer’s Name:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter a Name for your Engineer!'
                }
                return true
            } 
        },

        {
            type: 'input',
            name: 'engineerId',
            message: 'Please enter your Engineer’s ID:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter your Engineer’s Employment ID!'
                }
                return true
            } 
        },

        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Please enter your Engineer’s Email Address:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter a contact Email Address for your Engineer position!'
                }
                return true
            }
        },

        {
            type: 'input',
            name: 'gitHubUsrName',
            message: 'Please enter your Engineer’s GitHub Username:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter a username for your GitHub account!'
                }
                return true
            }
        },
    ])
    .then((answers) => {

        // Creating new Engineer Object
        const engineer = new Engineer(
            answers.engineerName,
            answers.engineerId,
            answers.engineerEmail,
            answers.gitHubUsrName
        );

        // Append TEAM array with Engineer Object
        teamBuider.push(engineer);
    });  
};

// ******* Staff - Intern (Prompts) *******
const promptUser3 = () => { 

    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Please enter your Intern’s Name:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter a Name for your Intern!'
                }
                return true
            } 
        },

        {
            type: 'input',
            name: 'internId',
            message: 'Please enter your Intern’s ID:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter your Intern’s Employment ID!'
                }
                return true
            } 
        },

        {
            type: 'input',
            name: 'internEmail',
            message: 'Please enter your Intern’s Email Address:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter a contact Email Address for your Intern\'s position!'
                }
                return true
            }
        },

        {
            type: 'input',
            name: 'internSchool',
            message: 'Please enter your Intern’s School of Education:',
            validate: (answer) => {
                if (answer === ''){
                    return 'Please enter a School that your Intern attended!'
                }
                return true
            }
        },
    ]) 
    .then((answers) => {

        // Creating new Intern Object 
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool,
        );

        // Append TEAM array with Intern Object
        teamBuider.push(intern);
    }); 
};


// function to initialize program
async function init() {
    try {

        // ****** Staff - manager ******
        // Initialise variable for Team Options selection from user input 
        let listOpts = false;

        await promptUser1(listOpts);
  
        // ****** Test for Option selected, Eng, Intern, TeamBuilding ******
        
        // if (arrFirstChoice === 'Add an Engineer') {
        if (userTeamOption === 'Add an Engineer') {

            // ****** Staff - Engineer ******
            await promptUser2();

            // Now call / present Options to user again, set feed-in parameter 'true'
            // ****** Options Return ******
            await promptUser1(true);
    
            // ********* Checking choice made by Engineer **********
                if (userTeamOption === 'Add an Engineer') {
                    // ****** Staff - Engineer ******
                    await promptUser2();

                    // Now call / present Options to user again, set feed-in parameter 'true'
                    // ****** Options Return ******
                    await promptUser1(true);

                    if (userTeamOption === 'Add an Engineer' || 'Add an Intern' || 'Finish building the team') {

                        console.log('final team array: ',teamBuider);
                        // Exit from inquirer - generate HTML 
                        // Populate template with user responses 
                        infoHTML = render(teamBuider);  

                        // function to write team.html file
                        writeToFile(outputPath, infoHTML);
                    }

                } else if (userTeamOption === 'Add an Intern') {
                    // ****** Staff - Intern ******
                    await promptUser3();
 
                    // Now call / present Options to user again, set feed-in parameter 'true'
                    // ****** Options Return ******
                    await promptUser1(true);
 
                    // ********* Checking choice made by Intern **********
                    if (userTeamOption === 'Add an Engineer' || 'Add an Intern' || 'Finish building the team') {

                        console.log('final team array: ',teamBuider);
                        // Exit from inquirer - generate HTML 
                        // Populate template with user responses 
                        infoHTML = render(teamBuider);  

                        // function to write team.html file
                        writeToFile(outputPath, infoHTML);
                    }
        
                } else if (userTeamOption === 'Finish building the team') {
                    
                    console.log('final team array: ',teamBuider);
                    // Exit from inquirer - generate HTML 
                    // Populate template with user responses 
                    infoHTML = render(teamBuider);  

                    // function to write team.html file
                    writeToFile(outputPath, infoHTML);
                }

            // **** Extra tests - Done *******

        // ****** Main prompt check continued:- *******
        } else if (userTeamOption === 'Add an Intern') {

            // ****** Staff - Intern ******
            await promptUser3();

            // Now call / present Options to user again, set feed-in parameter 'true'
            // ****** Options Return ******
            await promptUser1(true);
 
            // ********* Checking choice made by Intern **********
            if (userTeamOption === 'Add an Engineer' || 'Add an Intern' || 'Finish building the team') {

                console.log('final team array: ',teamBuider);
                // Exit from inquirer - generate HTML 
                // Populate template with user responses 
                infoHTML = render(teamBuider);
 
                // function to write team.html file
                writeToFile(outputPath, infoHTML);
            }

        } else if (userTeamOption === 'Finish building the team') {

            console.log('Hi, we are building a team!: ' ,userTeamOption);           
            // Exit from inquirer - generate HTML 
            // Populate template with user responses 
            infoHTML = render(teamBuider);

            // function to write team.html file
            writeToFile(outputPath, infoHTML);
        }
    }
    catch(err) {
        if (err) {
            console.error(err);
        } else {
            console.log('Overall success')
        }
    }
};

// function call to initialize program
init();


