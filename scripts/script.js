import {
  closeAddEmployeeModal,
  renderAddEmployeeModal,
  renderEmployeeData,
} from "./dom.js";
import { deleteEmployee, filterEmployees } from "./employee.js";
import {
  handleAddEmployeeFormSubmit,
  handleModifyEmployeeFormSubmit,
} from "./form.js";
import { getEmployeeDataFromLocalStorage } from "./localStorage.js";

export const employeeTableBody = document.getElementById("employeeTableBody");
export const searchInput = document.getElementById("searchInput");
export const searchBy = document.getElementById("searchBy");
const addEmployeeForm = document.getElementById("addEmployeeForm");
const addEmployeeButton = document.getElementById("addEmployeeButton");
export const addEmployeeModal = document.getElementById("addEmployeeModal");
export const closeAddEmployeeModalButton = document.getElementById(
  "closeAddEmployeeModalButton"
);
export const employeeDetailsModal = document.getElementById(
  "employeeDetailsModal"
);
export const overlay = document.getElementById("overlay");
export const fullNameInput = document.getElementById("fullNameInput");
export const roleInput = document.getElementById("roleInput");
export const projectsInput = document.getElementById("projectsInput");
export let employeesData = [];

// Employee Details Modal
export const closeEmployeeDetailsModalButton = document.getElementById(
  "closeEmployeeDetailsModalButton"
);
export const employeeIdDetails = document.getElementById("employeeIdDetails");
export const fullNameInputDetails = document.getElementById(
  "fullNameInputDetails"
);
export const roleInputDetails = document.getElementById("roleInputDetails");
export const projectsInputDetails = document.getElementById(
  "projectsInputDetails"
);
const employeeDetailsForm = document.getElementById("employeeDetailsForm");
const deleteEmployeeButton = document.getElementById("deleteEmployeeButton");

document.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  employeesData = getEmployeeDataFromLocalStorage();
  renderEmployeeData(employeesData);

  // Event listeners for Add Employee Modal
  addEmployeeButton.addEventListener("click", renderAddEmployeeModal);
  closeAddEmployeeModalButton.addEventListener("click", closeAddEmployeeModal);

  // Event listeners for Add Employee Form
  addEmployeeForm.addEventListener("submit", handleAddEmployeeFormSubmit);

  // Event listeners for More Details Modal
  employeeDetailsForm.addEventListener(
    "submit",
    handleModifyEmployeeFormSubmit
  );
  deleteEmployeeButton.addEventListener("click", deleteEmployee);

  // Event listeners for Search
  searchInput.addEventListener("input", filterEmployees);
  searchBy.addEventListener("change", filterEmployees);
}
