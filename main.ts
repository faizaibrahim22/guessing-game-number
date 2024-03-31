#!/usr/bin/evn node

import inquirer from "inquirer"

  
const randomNumber =Math.floor(Math.random()   *  6 + 1);




const answer = await inquirer.prompt([
    {message : "userguessnumber",
    name: "number",
    type : "pleases guess a number between 1-10:",


}]);
if (answer.userguessnumber===randomNumber){
    console.log(" good! right number.");
}else{
    console.log("wrong number"); 
}