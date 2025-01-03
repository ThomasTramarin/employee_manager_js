import { addEmployeeModal, closeEmployeeDetailsModalButton, employeeDetailsModal, employeesData, employeeTableBody, fullNameInput, overlay, projectsInput, roleInput } from "./script.js";

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

        // More details
        const actionsCell = document.createElement("td");
        actionsCell.classList.add("p-2");
        const moreDetails = document.createElement("button");

        moreDetails.addEventListener("click", renderEmployeeDetailsModal);

        moreDetails.textContent = "More Details";
        moreDetails.classList.add("underline", "text-cyan-500", "hover:text-cyan-400");
        actionsCell.appendChild(moreDetails);
        row.appendChild(actionsCell);
        employeeTableBody.appendChild(row);
    })
}

export function renderAddEmployeeModal() {
    addEmployeeModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

export function closeAddEmployeeModal() {
    addEmployeeModal.classList.add("hidden");
    overlay.classList.add("hidden");

    // Reset form data
    fullNameInput.value = "";
    roleInput.value = "";
    projectsInput.value = "";
}

function renderEmployeeDetailsModal(e){
    employeeDetailsModal.classList.remove("hidden");
    overlay.classList.remove("hidden");

    const employeeData = employeesData.find(employee => employee.id === Number(e.target.parentElement.parentElement.children[0].textContent));

    fullNameInputDetails.value = employeeData.fullName;
    roleInputDetails.value = employeeData.role;
    projectsInputDetails.value = employeeData.projects.join(", ");
    employeeIdDetails.textContent = employeeData.id;

    closeEmployeeDetailsModalButton.addEventListener("click", closeEmployeeDetailsModal)
}

export function closeEmployeeDetailsModal(){
    employeeDetailsModal.classList.add("hidden");
    overlay.classList.add("hidden");

    // Reset form data
    fullNameInputDetails.value = "";
    roleInputDetails.value = "";
    projectsInputDetails.value = "";
}