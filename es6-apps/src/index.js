// import { EmployeeService } from "./services/employee.service";
import EmployeeService  from "./services/employee.service";


function main(){
    let empService = new EmployeeService()
    console.log(empService.findAll())
}
main()