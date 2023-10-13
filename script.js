
const storedEmployees = JSON.parse(localStorage.getItem('employees'));
const employees = storedEmployees || [];

function addEmployee() {
    const name = document.getElementById('employeeName').value;
    const id = document.getElementById('employeeId').value;
    const designation = document.getElementById('employeeDesignation').value;
    const email = document.getElementById('employeeEmail').value; 
    const contact = document.getElementById('employeeContact').value;

    if (name === '' || id === '' || designation === '' || email === '' || contact === '') {
        alert('Please fill in all fields before adding an employee.');
        return;
    }
    
    const employee = {
        name,
        id,
        designation,
        email,
        contact
    };
    employees.push(employee);
    saveToLS();
    clearInputFields();
}

function saveToLS() {
    localStorage.setItem('employees', JSON.stringify(employees));
}

function clearInputFields() {
    ['employeeName', 'employeeId', 'employeeDesignation', 'employeeEmail', 'employeeContact'].forEach((field) => {
        document.getElementById(field).value = '';
    });

    saveToLS();
}

function displayEmployees() {
    const employeeTable = document.getElementById('employeeTable');

    const employeeDetails = employees.map((employee) => {
        return `<tr>
            <td>${employee.name}</td>
            <td>${employee.id}</td>
            <td>${employee.designation}</td>
            <td>${employee.email}</td>
            <td>${employee.contact}</td>
        </tr>
        `
        //`Name: ${employee.name}, ID: ${employee.id}, Designation: ${employee.designation}, Email: ${employee.email}, Contact: ${employee.contact}`;
    });

    employeeTable.innerHTML = `<tbody>${employeeDetails.join('')}</tbody>`;
}
/* function employees() {
    localStorage.clear();
  }*/

document.getElementById('addEmployeeButton').addEventListener('click', addEmployee);
document.getElementById('showEmployeeButton').addEventListener('click', displayEmployees);
