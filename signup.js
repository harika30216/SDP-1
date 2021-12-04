
import React from 'react';
import {Form, Button} from 'react-bootstrap';
import photo from './Work.png';



const SignUp = () => {
  return (
    <div>
      <center>
      <h1>Sign Up</h1>
      <img src={photo} width="150" height="150"></img>
            <Form style={{width:"70%", marginLeft:"8%", marginTop:"10%"}}>
            <Form.Group >
                  <Form.Label> Enter your first name  </Form.Label>
                  
                    <Form.Control type="text" placeholder="Enter your first name " />
                </Form.Group>
                <br/>
                <Form.Group>
                <Form.Label>Enter your last name  </Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name " />
                </Form.Group>
                <br/>
                <Form.Group >
                    <Form.Label>Date of Birth  </Form.Label>
                    <Form.Control type="DD/MM/YYYY" placeholder="DD/MM/YYYY" />
                </Form.Group>
                <br/>
                <Form.Group >
                    <Form.Label>Enter your bussiness email </Form.Label>
                    <Form.Control type="email" placeholder="Enter your bussiness email" />
                </Form.Group>
                <br/>
                <Form.Group >
                    <Form.Label>Enter your password  </Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <br/>
                <Form.Group >
                    <Form.Label>Confirm password  </Form.Label>
                    <Form.Control type="confirm password" placeholder="confirm password" />
                </Form.Group>
                <br/>
                <Button type="submit">Submit</Button>
            </Form>

      </center>
    </div>
  );
};

export default SignUp;
