import { Component, state, changeHandle, submitRj } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../Css/Register.css';
 
class RegisterUser extends Component {
 
    state = {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword
 
    }
 
    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitRj = (e) => {
        //for data sending(axios bhaneko req ra responsoe handle garne)
        e.preventDefault();// default behaviour type gareko data sapai loss hunxa(it prevents form to refreshed)
        axios.post('http://localhost:5000/user/register', this.state)
            .then((response) => {
                console.log({ response })
                alert("Success!")
 
            })
            .catch((error) => {
                console.log(error.response)
            })
    }
 
    render() {   
        return (
            <div>
                <div class="container">
                    <div class="mycard">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="myLeftCtn">
                                    <form className="myForm text-center">
                                        <header>Sign Up</header>
                                        <div className="form-group">
                                            <i className="fas fa-user"></i>

                                            <input className="myInput" type="text" placeholder="Firstname" name="firstname" defaultvalue={this.state.firstname} onChange={this.changeHandle} />
                                        </div>
 
                                        <div className="form-group">
                                            <i className="fas fa-user"></i>
                                            <input className="myInput" type="text" placeholder="Lastname" name="lastname" defaultvalue={this.state.lastname} onChange={this.changeHandle} />
                                        </div>
 
                                        <div className="form-group">
                                            <i className="fas fa-envelope"></i>
                                            <input className="myInput" type="text" placeholder="Email" name="email" defaultvalue={this.state.email} onChange={this.changeHandle} />
                                        </div>
 
 
                                        <div className="form-group">
                                            <i className="fas fa-user"></i>
                                            <input className="myInput" type="password" placeholder="Password" name="password" defaultvalue={this.state.password} onChange={this.changeHandle} />
                                        </div>
 
                                        <div class="form-group">
                                            <label>
                                                <input id="check_1" name="check_1" type="checkbox" />
                                                <small> I read and agree to Terms & Conditions</small>
                                                <div class="invalid-feedback">You must check the box.</div>
                                            </label>
                                        </div>

                                        {/* <button onClick={this.submitDip}> Submit</button> */}
 
                                        <button type="submit" className="butt" onClick={this.submitRj}>Sign Up </button>
 
                                        <div class="form-group1">
                                            <label>
                                                Already have an account? <a href="login">Sign in</a>
 
                                            </label>
                                        </div>
 
                                    </form>
                                </div>
                            </div>
 
                            <div class="col-md-6">
                                <div class="myRightCtn">
                                    <div class="box"><header>Welcome to Silent Revolution of Self-Realization</header>
 
                                        <p>"Yoga: Finding Ultimate Expression to Life"

                                     
                                </p>
                                        <Link to="#"><input type="button" class="butt_out" value="Learn More" /></Link>
 
                                    </div>
 
                                </div>
 
                            </div>
 
                        </div>
                    </div>
                </div>
            </div>
 
        )
 
    }
}
 
export default RegisterUser;