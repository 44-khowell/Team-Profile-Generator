# Module 12 Object-Oriented Programming: Team Profile Generator

## Description

For this project given the outline of my On-the-job ticket, my main objectives is to:

* Take take in information about employees on a software engineering team, then generate an HTML webpage that displays summaries for each person.

* To achieve this aim, This app will initialise a Node.js project, thus run npm. Utilising its command-line environment. Then 
through code using JavaScript’s prototypal inheritance system, use ES6 Classes to create Object-oriented solutions to inherit 
features from other objects. 

## User Story

    * AS A manager
    * I WANT to generate a webpage that displays my team's basic info
    * SO THAT I have quick access to their emails and GitHub profiles

## Acceptance Criteria

Presudocode

Inquirer Questions 

START: 

User Prompted:

    a. Please enter your Team Manager’s Name
    b. Please enter your Team Manager’s Employment ID
    c. Please enter your Team Manager’s Email Address 
    d. Please enter your Team Manager’s Office number
    
 Menu Options presented after:
 
    * Add an Engineer 
    * Add an Intern
    * Finish building the team 
    
 User Prompted:
 
      a. Please enter the Engineer’s Name
      b. Please enter the Engineer’s Employment ID
      c. Please enter the Engineer’s Email Address 
      d. Please enter the Engineer’s GitHub username
    Return back to options menu
    
 
  User Prompted:
  
      Intern Option:
           a. Please enter the Engineer’s Name
           b. Please enter the Engineer’s Employment ID
           c. Please enter the Engineer’s Email Address 
           d. Please enter the Engineer’s GitHub username
        Return back to options menu
 
      Build Team option selected:
         Exit from Inquirer 
   
         - HTML is generated 
         - Call the RENDER function 
             - Pass-in an ARRAY containing ALL the employees Objects
             - RENDER function, generates & returns a Block of HTML included templated DIV elements for each employee
         
         - Create an HTML file using the returned HTML from the RENDER function
         - Write it to a file named team.html in the output folder 
         - Use the outputPath variable to target this location

  
  
  
  


