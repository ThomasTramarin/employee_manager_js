import { closeAddEmployeeModal, renderAddEmployeeModal, renderEmployeeData } from "./dom.js";
import { handleAddEmployeeFormSubmit } from "./form.js";
import { getEmployeeDataFromLocalStorage } from "./localStorage.js";

export const employeeTableBody = document.getElementById("employeeTableBody");
const addEmployeeForm = document.getElementById("addEmployeeForm");
const addEmployeeButton = document.getElementById("addEmployeeButton");
export const addEmployeeModal = document.getElementById("addEmployeeModal");
export const closeAddEmployeeModalButton = document.getElementById("closeAddEmployeeModalButton");
export let employeesData = [];
document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    employeesData = getEmployeeDataFromLocalStorage();
    renderEmployeeData(employeesData);

    // Event listeners for Add Employee Modal
    addEmployeeButton.addEventListener("click", renderAddEmployeeModal);
    closeAddEmployeeModalButton.addEventListener("click", closeAddEmployeeModal);

    // Event listeners for Add Employee Form
    addEmployeeForm.addEventListener("submit", handleAddEmployeeFormSubmit)
}
