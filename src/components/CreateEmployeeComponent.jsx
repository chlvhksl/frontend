import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props);

        this.state={
            firstName:'',
            lastName:'',
            emailId:''
        };

        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeEmailId = this.changeEmailId.bind(this);
    }

    changeFirstName=(event) => {
        this.setState({firstName:event.target.value});
    }

    changeLastName=(event) => {
        this.setState({lastName:event.target.value});
    }

    changeEmailId=(event) => {
        this.setState({emailId:event.target.value});
    }

    add=(event) => {
        event.preventDefault();
        var employee = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            emailId:this.state.emailId           
        };

        console.log(typeof(employee));
        console.log(employee);
        console.log(JSON.stringify(employee));

        EmployeeService.createEmployee(employee).then(resp => {
            console.log(resp);
            this.props.history.push("/employees");
        });
    }

    cancle(){
        this.props.history.push("/employees");
    }

    render() {
        return (
            <div>
                <div className='container' style={{margin:"50px"}}>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>회원 추가 화면</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>FirstName</label>
                                        <input placeholder='First Name' className='form-control' name='firstName' value={this.state.firstName} onChange={this.changeFirstName}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>LastName</label>
                                        <input placeholder='Last Name' className='form-control' name='lastName' value={this.state.lastName} onChange={this.changeLastName}/>
                                    </div>
                                    <div className='form-group'>
                                        <label>Email ID</label>
                                        <input placeholder='Email Id' className='form-control' name='emaild' value={this.state.emailId} onChange={this.changeEmailId}/>
                                    </div>
                                    <div style={{textAlign:"center"}}>
                                        <button className='btn btn-success' onClick={this.add.bind(this)}>입력</button>
                                        <button className='btn btn-danger' onClick={this.cancle.bind(this)}>취소</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;