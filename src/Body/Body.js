import { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import RegisterUser from './RegisterUser';
import LoginUser from './LoginUser';
import Home from './Home';
// import Dashboard from './Dashboard';
import {Route} from 'react-router-dom';

class Body extends Component{
    render() {
        return(
            <Container>
                <Row>
                    <Col>
                    <Route path='/registeruser' component={RegisterUser} />
                    <Route path='/loginuser' component={LoginUser} />
                    <Route path='/' exact component={Home} />

                    </Col>
                    </Row>
                </Container>
            )
        }
    }
    
    export default Body;