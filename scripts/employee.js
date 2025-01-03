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
    let currentId = parseInt(localStorage.getItem("currentEmployeeId") || "1", 10);
    currentId += 1;
    localStorage.setItem("currentEmployeeId", currentId);
    Employee.id = currentId; 
  }
}