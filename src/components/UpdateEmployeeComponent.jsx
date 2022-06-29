import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {

    constructor(props){
        super(props);
        //TODO 01 라우터에서 호출된 id값을 state에 저장
        this.state={
            id:this.props.match.params.id,
            firstName:'',
            lastName:'',
            emailId:''
        }

        this.changeFirstName = this.changeFirstName.bind(this);
        this.changeLastName = this.changeLastName.bind(this);
        this.changeEmailId = this.changeEmailId.bind(this);
    }

    //TODO 02 componentDidMount를 통해서 id로 REST API를 호출하여 state에 담아주기
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then((resp)=>{
        //    console.log(resp.data);
            let employee = resp.data;
            this.setState({
                firstName:employee.firstName,
                lastName:employee.lastName,
                emailId:employee.emailId                
            });
        });
    }    

    //TODO 05 function작성
    //TODO 06 취소 버튼 작성
    cancel(){
        this.props.history.push("/employees");
    }

    changeFirstName = (event) => {
        this.setState({firstName:event.target.value});
    }

    changeLastName = (event) => {
        this.setState({lastName:event.target.value});
    }

    changeEmailId = (event) => {
        this.setState({emailId:event.target.value});
    }

    render() {
        return (
            <div>
                <div className='container' style={{margin:"50px"}}>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>회원 수정 화면</h3>
                            <div className='card-body'>
                                <form>
                                    {/* TODO 03 componenetDidMount에 의해서 생성된 state값을 화면에 렌더링 */}
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
                                    {/* TODO 04 버튼 생성 수정/취소 */}
                                    <div style={{textAlign:"center"}}>
                                        <button className='btn btn-success' onClick={this.updateEmployee}>수정</button>
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)}>취소</button>
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

export default UpdateEmployeeComponent;