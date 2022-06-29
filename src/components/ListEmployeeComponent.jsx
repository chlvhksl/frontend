import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

// rcc 자동완성 하면 기본 template이 나옴
// 생성자 this.state에 REST를 통해서 전달 받은 객체를 선언
// props 부모의 객체를 상속하고있음
// render영역을 통해서 App.js에 렌더링된 코드를 작성하게 됨


class ListEmployeeComponent extends Component {

    constructor(props){ // 생성자
        super(props)

        this.state={ // state는 현재 클래스(ListEmployeeComponent)에 render에 사용되는 값, service Axios를 통해서 전달
            employees:[]
        }

        this.addEmployee=this.addEmployee.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
    }

    addEmployee(){
        this.props.history.push("/add-employees");
    }

    updateEmployee(id){
        // grave 표현식 : 여러개의 값을 바인딩 할 때 사용 
        // 불편하면 concatenation 사용
        this.props.history.push(`/update-employees/${id}`);
    }

    editProps = (event) => {
        console.log(event.target.getAttribute("data-msg"));
    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({employees:res.data})
        });
    }

    render() { // render를 통해 ReactDom에 전달함  -> 화면으로 구성
        return (
            <div>
                <h2 className="text-center">employees List</h2>
                <div>
                    <button className="btn btn-primary" onClick={this.addEmployee}>직원추가</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                            this.state.employees.map(employees =>
                            <tr key={employees.id}>
                                <td>{employees.firstName}</td>
                                <td>{employees.lastName}</td>
                                <td>{employees.emailId}</td>
                                <td>
                                    <button className='btn btn-info' data-msg={employees.id}
                                    // 1. 화살표 함수 사용
                                    onClick={()=>this.updateEmployee(employees.id)}>수정</button> 
                                    {/* // onClick={this.updateEmployee.bind(this, employees.id)}>수정</button> 2. bind함수를 사용 */}
                                    {/* // onClick={this.editProps}>수정</button> // Props 사용자 속성 사용 */}
                                </td>
                            </tr>)    
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;