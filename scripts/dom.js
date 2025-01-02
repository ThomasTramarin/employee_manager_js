import { addEmployeeModal, employeeTableBody } from "./script.js";

export function renderEmployeeData(employeeData) {
    employeeTableBody.innerHTML = "";
    employeeData.forEach((employee) => {
        
        const row = document.createElement("tr");
        
        for (const key in employee) {
            const cell = document.createElement("td");
            cell.classList.add("p-2");
            cell.textContent = employee[key];
            row.appendChild(cell);
        }

        const actionsCell = document.createElement("td");
        actionsCell.classList.add("p-2");
        const moreDetails = document.createElement("button");
        moreDetails.textContent = "More Details";
        moreDetails.classList.add("underline", "text-cyan-500", "hover:text-cyan-400");
        actionsCell.appendChild(moreDetails);
        row.appendChild(actionsCell);
        employeeTableBody.appendChild(row);
    })
}

export function renderAddEmployeeModal() {
    addEmployeeModal.classList.remove("hidden");
}

export function closeAddEmployeeModal() {
    addEmployeeModal.classList.add("hidden");
}