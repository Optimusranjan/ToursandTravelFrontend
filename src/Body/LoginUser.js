import { Component } from "react";
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Button,Form} from 'react-bootstrap';
import '../Css/Login.css';

class LoginUser extends Component{
    
    
    state = {
        email : '',
        password : '',
        confirmpassword : "",
        loginChk: false
    }
    inputHandler1212 = (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submitUser = (e)=>{
        e.preventDefault();
     
        axios.post('http://localhost:5000/user/login', this.state)
        .then((response)=>{
            this.setState({
                loginChk : true
            })
          //  localStorage.setItem('token', response.data.token);
          localStorage.setItem('token', response.data.token);
          window.location.href="/Dashboard"
          
          alert("You are successfully login")
        })
        .catch((err)=>{
            console.log(err.response)
            alert("Invalid Credientials")
        })
    }

    render(){
        // redirect
        if(this.state.loginChk===true){
            return <Redirect to='/Dashboard'/>
        }
        // if(localStorage.getItem('token')){
        //     return <Redirect to='/Programadd'/>
        // }
        return(
            
        //     <div>
        //     <form>
          
        //     <div class="container">
        //       <label for="email"><b>Email</b></label>
        //       <input type="text" name="email" value={this.state.email}
        //       onChange={this.inputHandler1212}
        //       />
          
        //       <label for="psw"><b>Password</b></label>
        //       <input type="password" name="password" value={this.state.password}
        //       onChange={this.inputHandler1212}
        //       />
          
        //       <button onClick={this.submitUser}>Login</button>
             
        //     </div>
          
         
        //   </form> 
        //   </div>
                
        <header>
        <div className="main_div">
            <div className="Box1">
                <h1>Login Form</h1>
                <form method="" action="">
                    <div className="inputBox">
                        <input type="text" autoComplete="off" name="email" defaultvalue={this.state.email} onChange= {this.inputHandler1212} required/>
                        <label>Email</label>

                    </div>
                    <div className="inputBox">
                        <input type="password" autoComplete="off" name="password" defaultvalue={this.state.password} onChange= {this.inputHandler1212} required/>
                        <label>Password</label>

                    </div>
                    <button type="button" class="btn btn-primary" onClick={this.submitUser}>Login</button>
                    <p></p><a href="Register">Register here?</a>
                </form>
            </div>
            
        </div>
        </header>
        )
    }
}

export default LoginUser;