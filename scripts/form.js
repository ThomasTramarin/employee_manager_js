import { closeAddEmployeeModal, renderEmployeeData } from "./dom.js";
import { Employee } from "./employee.js";
import { saveEmployeeDataToLocalStorage } from "./localStorage.js";
import { employeesData, fullNameInput, projectsInput, roleInput } from "./script.js";

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
        const employee = new Employee(formData.fullName, formData.role, projectsArray);
        const employeeData = employee.getEmployeeData();
        employeesData.push(employeeData);
        saveEmployeeDataToLocalStorage(employeesData);
        renderEmployeeData(employeesData);
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