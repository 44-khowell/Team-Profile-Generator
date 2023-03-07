const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");

const { lutimes } = require("fs/promises");


// Variables
// Array for storing Selected team members
const arrayChoices = [];
let teamBuider = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.


// Function for displaying / prompting user with questions
// Staff - Manager 
const promptUser1 = (options) => {

    if (options === false) { 
       console.log('current option status-1: ', options); 
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
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
        },
    
    ]) 
    // listOpts - false
    } else {
        // ********* Options Only *********
        console.log('current option status-2: ', options); 
        return inquirer.prompt ([
        {
            type: 'list',
            name: 'teamOption',
            message: 'Please enter choice of individual\'s for your staff from the options given?',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building the team'],
        },
    ])
    }
};

// Staff - Engineer 
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
};

// Staff - Intern  
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
};


// function to initialize program
async function init() {
    try {

        // ****** Staff - manager ******
        let listOpts = false;
        let answersMrg = await promptUser1(listOpts);
        console.log(answersMrg);
        // Create initial array called teambuilder[]
        teamBuider.push(answersMrg);
        console.log(teamBuider);
        
        // Extract Next option 
        // Create an array of Values from Object
        let usrFirstChoice = Object.values(answersMrg);
        console.log('usrFirstChoice output:', usrFirstChoice); 
        // Get the last value of the array (to use as an usr Option Selector)
        let arrFirstChoice = usrFirstChoice.pop();

        // Create initial array called teambuilder[], with Key staff values only
        // Remove the last key/value from the Object (teamOption), so answersMrg has only the required items
        delete teamBuider[0].teamOption;
        console.log(teamBuider);
        console.log('First Option choice ans:',arrFirstChoice);


        // Test for Option selected, Eng, Intern, TeamBuilding
        
        if (arrFirstChoice === 'Add an Engineer') {

            // ****** Staff - Engineer ******
            let answersEng = await promptUser2();
            console.log(answersEng);
            // append answer to an array called teamBuider[]
            teamBuider.push(answersEng);
            console.log(teamBuider);

            // Now call / present Options to user again, set feed-in parameter 'true'
            // ****** Options Return ******
            let nextOption = await promptUser1(true);
            console.log(nextOption);

            // Extract Next option 
            // Create an array of Values from Object
            usrFirstChoice = Object.values(nextOption);
            // Get the last value of the array
            arrFirstChoice = usrFirstChoice.pop();
            console.log('First Option choice ans-2:',arrFirstChoice);

            // ********* Checking choice made by Engineer **********
                if (arrFirstChoice === 'Add an Engineer') {
                    // ****** Staff - Engineer ******
                    answersEng = await promptUser2();
                    console.log(answersEng);
                    // append answer to an array called teamBuider[]
                    teamBuider.push(answersEng);
                    console.log(teamBuider);

                    // Now call / present Options to user again, set feed-in parameter 'true'
                    // ****** Options Return ******
                    nextOption = await promptUser1(true);
                    console.log(nextOption);

                    // Extract Next option 
                    // Create an array of Values from Object
                    usrFirstChoice = Object.values(nextOption);
                    // Get the last value of the array
                    arrFirstChoice = usrFirstChoice.pop();
                    console.log('First Option choice ans-3:',arrFirstChoice);

                    if (arrFirstChoice === 'Add an Engineer' || 'Add an Intern' || 'Finish building the team') {
                        console.log('ans-3: Finish building the team');
                        console.log('final team array: ',teamBuider);
                    }

                } else if (arrFirstChoice === 'Add an Intern') {
                    // ****** Staff - Intern ******
                    answersIntern = await promptUser3();
                    console.log(answersIntern);
                    // append answer to an array called teamBuider[]
                    teamBuider.push(answersIntern);
                    console.log(teamBuider);

                    // Now call / present Options to user again, set feed-in parameter 'true'
                    // ****** Options Return ******
                    let nextOption = await promptUser1(true);
                    console.log(nextOption);

                    // Extract Next option 
                    // Create an array of Values from Object
                    usrFirstChoice = Object.values(nextOption);
                    // Get the last value of the array
                    arrFirstChoice = usrFirstChoice.pop();
                    console.log('First Option choice ans-4:',arrFirstChoice);

                    // ********* Checking choice made by Intern **********
                    if (arrFirstChoice === 'Add an Engineer' || 'Add an Intern' || 'Finish building the team') {

                        console.log('ans-4: Finish building the team');
                        console.log('final team array: ',teamBuider);

                        // Populate template with user responses 
                        const infoHTML = render(teamBuider);
                        console.log(infoHTML);    
                    }
        
                } else if (arrFirstChoice === 'Finish building the team') {
                    console.log('Hi, we building a team!: ' ,arrFirstChoice);
                    // Return teamBuider[] array 
                    console.log('ans-5: Finish building the team');
                    console.log('final team array: ',teamBuider);
                }

            // **** extra tests Done *******

        } else if (arrFirstChoice === 'Add an Intern') {

            // ****** Staff - Intern ******
            answersIntern = await promptUser3();
            console.log(answersIntern);
            // append answer to an array called teamBuider[]
            teamBuider.push(answersIntern);
            console.log(teamBuider);

            // Now call / present Options to user again, set feed-in parameter 'true'
            // ****** Options Return ******
            nextOption = await promptUser1(true);
            console.log(nextOption);

            // Extract Next option 
            // Create an array of Values from Object
            usrFirstChoice = Object.values(nextOption);
            // Get the last value of the array
            arrFirstChoice = usrFirstChoice.pop();
            console.log('First Option choice ans-4:',arrFirstChoice);

            // ********* Checking choice made by Intern **********
            if (arrFirstChoice === 'Add an Engineer' || 'Add an Intern' || 'Finish building the team') {

                console.log('ans-4a: Finish building the team');
                console.log('final team array: ',teamBuider);

            // Populate template with user responses 
            //render = page-template(manager, engineer, intern);
            const infoHTML = render(teamBuider);
            console.log(infoHTML);

            }


        } else if (arrFirstChoice === 'Finish building the team') {

            console.log('ans-6: Finish building the team');
            console.log('Hi, we are building a team!: ' ,arrFirstChoice);
            
            // Return teamBuider[] array 
            console.log(teamBuider);
            // ******* To Do *******
            // Exit from inquirer - generate HTML 

            // Populate template with user responses 
            const infoHTML = render(teamBuider);
            console.log(infoHTML);

            // fs.writeFile(outputPath, infoHTML, (error) => {

            //     return error 
            //     ? console.error(err) 
            //     : console.log('success')
            // });

        }

    // ******** console.log - response output check ***********
    //    let answers = Object.values(teamOption);
    //     let arrChoice = answers.pop();
    //     console.log('choice ans',arrChoice);
    // ********************************************************

        // ********* To do ************
        // Save populated template to ReadMe.md file 
        // writeToFile('README.md', template);
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


// // function to write README file
// function writeToFile(fileName, data) {

//     fs.writeFile(fileName, data, (err) =>
//         err ? console.error(err) : console.log('success')
//     );
// }