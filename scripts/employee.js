export class Employee {
  static id = 1;
  constructor(fullName, role, projects) {
    this.fullName = fullName;
    this.role = role;
    this.projects = projects;
    this.id = Employee.id++;
  }

  getEmployeeData() {
    return {
      id: this.id,
      fullName: this.fullName,
      role: this.role,
      projects: this.projects,
    };
  }
}

