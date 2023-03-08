# Module 12 Object-Oriented Programming: Team Profile Generator

## Description :closed_book:

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

  
  ## Mock-Up :pushpin:
  
  Unit Testing Results (via Jest):
  
  ![TestResult-Final](https://user-images.githubusercontent.com/119610043/223873410-db8505e2-adc3-43d8-9e63-6c7db7936660.png)
  
  Object Team-Generated Array Sample: 
  
  ![Object-team-array-generated](https://user-images.githubusercontent.com/119610043/223860836-210b8801-8d4f-457a-958b-e4a270a88f73.png)

  Team.html - Application Generated Output Sample 
  
  ![Team-html-Output](https://user-images.githubusercontent.com/119610043/223861328-e73ffea9-aac7-48b0-99eb-d5f4b08f4d49.png)

  
  ## Page Link :pushpin:
  
  My GitHub Link: https://github.com/44-khowell/Team-Profile-Generator/
  
  URL of the deployed application: https://44-khowell.github.io/Team-Profile-Generator/
  
  
## Credits :pushpin:

   Refernces 

   - https://www.tabnine.com/academy/javascript/how-to-get-an-objects-keys-and-values/#:~:text=Getting%20an%20object%E2%80%99s%20values%20The%20Object.values%20%28%29%20method,Object.entries%20%28%29%20method%20returns%20an%20array%20of%20arrays.
   - https://www.youtube.com/watch?v=hsA_hx5H_4M&list=PLovN13bqAx7D_MFjL0PHnCkYAHMSO8-kU&index=74
   - https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow


# License :pushpin:

Copyright (c) Keith Howell

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
