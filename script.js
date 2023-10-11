const employees = [];

function addEmployee() {
    const name = document.getElementById('employeeName').value;
    const id = document.getElementById('employeeId').value;
    const designation = document.getElementById('employeeDesignation').value;
    const email = document.getElementById('employeeEmail').value; 
    const contact = document.getElementById('employeeContact').value;

    const employee = {
        name,
        id,
        designation,
        email,
        contact
    };
    employees.push(employee);

    clearInputFields();
}

function clearInputFields() {
    ['employeeName', 'employeeId', 'employeeDesignation', 'employeeEmail', 'employeeContact'].forEach((field) => {
        document.getElementById(field).value = '';
    });
}

function displayEmployees() {
    const employeeUl = document.getElementById('employeeUl');

    const employeeDetails = employees.map((employee) => {
        return `Name: ${employee.name}, ID: ${employee.id}, Designation: ${employee.designation}, Email: ${employee.email}, Contact: ${employee.contact}`;
    });

    employeeUl.innerHTML = `<li>${employeeDetails.join('</li><li>')}</li>`;
}

document.getElementById('addEmployeeButton').addEventListener('click', addEmployee);
document.getElementById('showEmployeeButton').addEventListener('click', displayEmployees);
