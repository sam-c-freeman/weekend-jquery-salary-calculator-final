//add test employees here
//add array here

const employeeOne = {
    firstName: 'Sam', 
    lastName: 'Freeman', 
    idNumber: '9462', 
    jobTitle: 'Cool Guy', 
    annualSalary: '50000',
};
const employeeTwo = {
    firstName: 'Sascha', 
    lastName: 'Kala', 
    idNumber: '2124', 
    jobTitle: 'Software Engineer', 
    annualSalary: '100000'
};

const employeeThree = {
    firstName: 'Ro', 
    lastName: 'McDonald', 
    idNumber: '6666', 
    jobTitle: 'Pet Wrangler', 
    annualSalary: '75000'
};


const employees = [employeeOne, employeeTwo, employeeThree];

$(document).ready(readyNow);
function readyNow() {
    $('#submitButton').on('click', collectEmployeeData);
  }

function collectEmployeeData (){
    let newEmployee = {
        firstName: $('#first-name').val(),
        lastName: $('#last-name').val(),
        idNumber: $('#id-number').val(),
        jobTitle: $('#job-title').val(),
        annualSalary: $('#annual-salary').val(),
    }
    employees.push(newEmployee);
}


//   for (let employee of employees){
//     console.log(employee);
// } //Not needed?