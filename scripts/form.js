import { closeAddEmployeeModal, renderEmployeeData } from "./dom.js";
import { Employee } from "./employee.js";
import { saveEmployeeDataToLocalStorage } from "./localStorage.js";
import { employeesData } from "./script.js";

export function handleAddEmployeeFormSubmit(e){
    e.preventDefault();
    
    const formData = {
        fullName: document.getElementById("fullName").value,
        role: document.getElementById("role").value,
        projects: document.getElementById("projects").value,
    }

    if(formData.fullName && formData.role && formData.projects){
        const projectsArray = formData.projects.split(",");
        const employee = new Employee(formData.fullName, formData.role, projectsArray);
        const employeeData = employee.getEmployeeData();
        employeesData.push(employeeData);
        saveEmployeeDataToLocalStorage(employeesData);
        renderEmployeeData(employeesData);
        closeAddEmployeeModal();
    }else{
        alert("All fields are required");
    }
}