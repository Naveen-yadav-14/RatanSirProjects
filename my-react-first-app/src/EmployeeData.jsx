function EmployeeData({employeeObj}){

    return(
        <>
        <h1>Employee data</h1>
        <p>Employee id:{employeeObj.id}</p>
        <p>Employee Name:{employeeObj.name}</p>
        <p>Employee Salary:{employeeObj.salary}</p>
        </>
    )

}
export default EmployeeData