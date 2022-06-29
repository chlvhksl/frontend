import axios from 'axios';

const EMPLOYEE_API_BASE_URL="http://localhost:8080/api/v1/employees";

class EmployeeService{

    //모든 회원의 정보 리스트
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    //회원을 입력
    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    //회원 상세 정보
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+"/"+employeeId)
    }

    //회원 수정
    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_API_BASE_URL+"/"+employeeId, employee);
    }

}

export default new EmployeeService();