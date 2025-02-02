import { closeEmployeeDetailsModal, renderEmployeeData } from "./dom.js";
import { saveEmployeeDataToLocalStorage } from "./localStorage.js";
import { employeesData, searchBy, searchInput } from "./script.js";

export class Employee {
  static id = 1;

  constructor(fullName, role, projects) {
    this.fullName = fullName;
    this.role = role;
    this.projects = projects;
    this.id = Employee.id;
  }

  getEmployeeData() {
    return {
      id: this.id,
      fullName: this.fullName,
      role: this.role,
      projects: this.projects,
    };
  }

  static getNextId() {
    let currentId = localStorage.getItem("currentEmployeeId");
    if (!currentId) {
      currentId = 1;
    } else {
      currentId = parseInt(currentId, 10);
    }
    return currentId;
  }

  static incrementId() {
    let currentId = parseInt(
      localStorage.getItem("currentEmployeeId") || "1",
      10
    );
    currentId += 1;
    localStorage.setItem("currentEmployeeId", currentId);
    Employee.id = currentId;
  }
}

export function deleteEmployee() {
  const employeeId = Number(employeeIdDetails.textContent);
  console.log(employeesData);
  const employeeIndex = employeesData.findIndex(
    (employee) => employee.id === employeeId
  );
  console.log(employeeIndex);
  if (employeeIndex !== -1) {
    employeesData.splice(employeeIndex, 1);

    saveEmployeeDataToLocalStorage(employeesData);

    renderEmployeeData(employeesData);

    closeEmployeeDetailsModal();
  } else {
    alert("Employee not found.");
  }
}

export function filterEmployees(e) {
  let plainText = searchInput.value.toLowerCase();

  const filterBy = searchBy.value;

  const filteredEmployees = employeesData.filter((employee) => {
    if (filterBy === "name") {
      return employee.fullName.toLowerCase().includes(plainText);
    } else if (filterBy === "role") {
      return employee.role.toLowerCase().includes(plainText);
    } else if (filterBy === "project") {
      return employee.projects.join(",").toLowerCase().includes(plainText);
    }
    return false;
  });

  renderEmployeeData(filteredEmployees);
}
