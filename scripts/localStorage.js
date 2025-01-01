export function getEmployeeDataFromLocalStorage() {
    const employeeData = localStorage.getItem("employeeData");
    if(employeeData){
        return JSON.parse(employeeData);
    }else {
        saveEmployeeDataToLocalStorage([]);
        return [];
    }
}

export function saveEmployeeDataToLocalStorage(employeeData) {
    localStorage.setItem("employeeData", JSON.stringify(employeeData));
}