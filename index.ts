#! /usr/bin/env node

import inquirer from "inquirer";

let accountTtile: string = "Tanzeela Arshad"
let accountBalance: number = 20000;
let pinCode: string = "22421";

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "password",
        message: "enter your secret pin code"
    }
]);

if (pinAnswer.pin === pinCode) {
    console.log("Welcome!");

let procedureAns = await inquirer.prompt([
    {
        name: "process",
         message: "please choose to proceed", 
        type: "list",
        choices: ["withdraw", "balance inquiry", "fast cash: " ,
         "1000", "3000", "5000", "10000" ]
    }
]);
    console.log(procedureAns.process);

    if (procedureAns.process === "1000") {
        let reAmount = (accountBalance -= procedureAns.process);
        console.log("your remaining balance is:" ,reAmount )
    } if (procedureAns.process === "3000") {
        let reAmount = (accountBalance -= procedureAns.process);
        console.log("your remaining balance is:" ,reAmount)
    } if (procedureAns.process === "5000") {
        let reAmount = (accountBalance -= procedureAns.process);
        console.log("your remaining balance is:" ,reAmount)
    }if (procedureAns.process === "10000") {
        let reAmount = (accountBalance -= procedureAns.process);
        console.log("your remaining balance is:" ,reAmount)
    } 

    if (procedureAns.process === "balance inquiry") {
        console.log("Your account balance is: " +accountBalance);
    }
    if (procedureAns.process === "withdrawcash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amountAns",
                message: "Enter amount to withdraw",
                type: "number"

            }
        ])
    }
    if (procedureAns.process === "withdraw"  ) {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "amount",
                message: "enter amount to withdraw",
                type: "number"
            }
        ]); 
        if (accountBalance >= withdrawAmount.amount ){
            let updateBalance = accountBalance -= withdrawAmount.amount
            console.log("your remaining balance is:" , updateBalance )
        }

     else if (withdrawAmount.withdrawcash > accountBalance)
    console.log("You've insufficient Balance")
    console.log("your account balance is:" , accountBalance);
    } else {
        console.log("Thank You for banking with Us!");
    }

    } else {
        console.log("Invalid Pin");
    }