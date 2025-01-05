import {
  closeAddEmployeeModal,
  closeEmployeeDetailsModal,
  renderEmployeeData,
} from "./dom.js";
import { Employee } from "./employee.js";
import { saveEmployeeDataToLocalStorage } from "./localStorage.js";
import {
  employeeIdDetails,
  employeesData,
  fullNameInput,
  fullNameInputDetails,
  projectsInput,
  projectsInputDetails,
  roleInput,
  roleInputDetails,
} from "./script.js";

export function handleAddEmployeeFormSubmit(e) {
  e.preventDefault();

  // Get form data
  const formData = {
    fullName: fullNameInput.value,
    role: roleInput.value,
    projects: projectsInput.value,
  };

  // Validate form data
  if (formData.fullName && formData.role && formData.projects) {
    const projectsArray = formData.projects.split(",");
    // Create employee
    const employee = new Employee(
      formData.fullName,
      formData.role,
      projectsArray
    );
    const employeeData = employee.getEmployeeData();
    employeesData.push(employeeData);
    saveEmployeeDataToLocalStorage(employeesData);
    renderEmployeeData(employeesData);
    Employee.incrementId();
    closeAddEmployeeModal();
  } else {
    alert("All fields are required");

    // Focus on the first empty input field
    if (!formData.fullName) {
      fullNameInput.focus();
    } else if (!formData.role) {
      roleInput.focus();
    } else if (!formData.projects) {
      projectsInput.focus();
    }
  }
}

export function handleModifyEmployeeFormSubmit(e) {
  e.preventDefault();

  // Get form data
  const formData = {
    fullName: fullNameInputDetails.value,
    role: roleInputDetails.value,
    projects: projectsInputDetails.value,
    id: Number(employeeIdDetails.textContent),
  };

  // Validate form data
  if (formData.fullName && formData.role && formData.projects) {
    const projectsArray = formData.projects.split(",");

    // Find the employee index
    const employeeIndex = employeesData.findIndex(
      (employee) => employee.id === formData.id
    );

    if (employeeIndex !== -1) {
      // Create new employee
      const updatedEmployee = new Employee(
        formData.fullName,
        formData.role,
        projectsArray
      );

      const updatedEmployeeData = updatedEmployee.getEmployeeData();
      updatedEmployeeData.id = formData.id; // Original id

      // Update data
      employeesData.splice(employeeIndex, 1, updatedEmployeeData);
      saveEmployeeDataToLocalStorage(employeesData);
      renderEmployeeData(employeesData);
      closeEmployeeDetailsModal();
    } else {
      alert("Employee not found.");
    }
  } else {
    alert("All fields are required");

    // Focus on the first empty input field
    if (!formData.fullName) {
      fullNameInputDetails.focus();
    } else if (!formData.role) {
      roleInputDetails.focus();
    } else if (!formData.projects) {
      projectsInputDetails.focus();
    }
  }
}
