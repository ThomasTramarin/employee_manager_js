import { employeeTableBody } from "./script";

export function renderEmployeeData(employeeData) {
    employeeData.forEach((employee) => {
        // fai creando tutti i td non con inner html
        const row = document.createElement("tr");
        
        for (const key in employee) {
            const cell = document.createElement("td");
            cell.textContent = employee[key];
            row.appendChild(cell);
        }

        employeeTableBody.appendChild(row);
    })
}

export function renderAddEmployeeForm() {
    
}