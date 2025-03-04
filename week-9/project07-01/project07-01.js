"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Dagmawi Megra
      Date: 03/03/2025

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
  e.preventDefault();
  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");

  // declare the regular expressions
  let regex1 = /[A-Z]/; // any uppercase letter A through Z
  let regex2 = /[0-9]/; // any single digit
  let regex3 = /[!$#%]/; // contains the symbols !$#%

  // Check the password matches the regular expressions
  // before form submission
  if(pwd.length < 8){
    feedback.textContent = "Your password must be at least 8 characters."
  }else if(!(regex1.test(pwd))){
    feedback.textContent = "Your password must include an uppercase letter."
  }else if(!(regex2.test(pwd))){
    feedback.textContent = "Your password must include a number."
  }else if(!(regex3.test(pwd))){
    feedback.textContent = "Your password must include one of the following: !$#%."
  }else{
    this.submit()
  }
}
);