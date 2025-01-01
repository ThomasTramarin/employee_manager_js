import { renderEmployeeData } from "./dom.js";
import { Employee } from "./employee.js";
import { getEmployeeDataFromLocalStorage } from "./localStorage.js";

export const employeeTableBody = document.getElementById("employeeTableBody");
const addEmployeeButton = document.getElementById("addEmployeeButton");

document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const employeeData = getEmployeeDataFromLocalStorage();
    renderEmployeeData(employeeData);

    addEmployeeButton.addEventListener("click", renderAddEmployeeForm);
}
