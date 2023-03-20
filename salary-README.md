# Net Salary Calculator
# Description
This is a simple JavaScript program that calculates an individual's net salary based on their basic salary and benefits. The program also calculates the payee (i.e. tax), NHIF deductions, NSSD deductions, gross salary, and net salary.

# Project Setup
To use this program, simply copy the code from net-salary-calculator.js into your JavaScript project. You can then call the calculateNetSalary function with the individual's basic salary and benefits to get their gross salary and net salary.

example:

const basicSalary = 50000;
const benefits = 10000;
const { grossSalary, netSalary } = calculateNetSalary(basicSalary, benefits);
console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}, Net Salary: KES ${netSalary.toFixed(2)}`);

This will calculate the net salary for an individual with a basic salary of KES 50,000 and benefits of KES 10,000, and log the results to the console.

# Author & License
This program was created by [Your Name Here] and is licensed under the MIT License. See the LICENSE file for more information.