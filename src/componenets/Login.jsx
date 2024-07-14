import React, { useState } from 'react'
import {
  Container, CardHeader, CardBody, Card, Form, FormGroup, Label, Input, Button
} from 'reactstrap'
import { loginUser } from './service/UserService';
import { toast } from 'react-toastify';

export default function Login() {
  // getting login information
  const [loginData, setLoginData] = useState({
    username:'',
    password:'',
        
  });
  // field value setting
  const setValue=(event,fieldName)=>{
    setLoginData({...loginData,[fieldName]:event.target.value});
  }
  // submitting the loging form
  const loginFormSubmit=(event)=>{
    event.preventDefault();
    if(loginData.username.trim()===''&& loginData.password.trim()===''){
      toast.error("Username and password is required");
    }
    loginUser(loginData).then(data=>{
      toast.success("Login Success")
      console.log(data);
    }).catch(error=>{
      alert("error")
      console.log(error)
    })
  }
  return (
    <Container className='d-flex justify-content-center mt-5'>
      <Card

        className="my-2"
        color="warning"
        outline
        style={{
          width: '25rem'
        }}
      >
        {JSON.stringify(loginData)}
        <CardBody>
          <CardHeader tag="h3" className='text-center'>
            Login Here
          </CardHeader>
          <Form className='mt-3'>
            <FormGroup>
              <Label for="username">
                Username
              </Label>
              <Input
              value={loginData.username}
              onChange={(event)=>setValue(event,'username')}
                id="name"
                name="username"
                placeholder="Username Here"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">
                Password
              </Label>
              <Input
                onChange={(event)=>setValue(event,'password')}
                value={loginData.password}
                id="psd"
                name="password"
                placeholder="Password Here"
                type="password"
              />
            </FormGroup>
          </Form>
          <div className="d-flex justify-content-center">
            <Button
            onClick={loginFormSubmit}
              color="success mt-3 me-2" className=''
            >
              Login
            </Button>
          </div>
        </CardBody>
      </Card>
    </Container>
  )
}