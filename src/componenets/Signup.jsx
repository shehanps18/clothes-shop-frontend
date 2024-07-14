import React, { useState } from 'react';
import { Container, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { createUser } from '../componenets/service/UserService';
import { toast } from 'react-toastify';

function Signup() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
    about: '',
    password: ''
  });

  const onFieldChange = (event, fieldName) => {
    setUser({ ...user, [fieldName]: event.target.value });
  };

  const registerUser = (event) => {
    event.preventDefault();

    // Validation
    if (user.name.trim() === '') {
      toast.error("Name is required");
      toast.done("Name is required")
      return;
    }
    if (user.email.trim() === '') {
      toast.error("email is required");
      toast.done("email is required")
      return;
    }
    if (user.phone.trim() === '' || user.phone.trim().length !== 10) {
      alert("Phone must be 10 digits");
      return;
    }
    if (user.gender.trim() === '') {
      alert("Gender is required");
      return;
    }
    if (user.about.trim() === '') {
      alert("About is required");
      return;
    }
    if (user.address.trim() === '') {
      alert("Address is required");
      return;
    }

    // Make an API call to register the user
    createUser(user)
      .then(data => {
        toast.success("User registered successfully");
       
        // Optionally reset the form
        setUser({
          name: '',
          email: '',
          phone: '',
          gender: '',
          address: '',  
          about: '',
          password: ''
        });
      })
      .catch(error => {
        toast.error("Error in user saved")
        console.error('There was an error registering the user!', error);
      });
  };

  const reset = () => {
    setUser({
      name: '',
      email: '',
      phone: '',
      gender: '',
      address: '',
      about: '',
      password: ''
    });
  };

  return (
    <Container className='d-flex justify-content-center mt-5'>
      <Card
        className="my-2 shadow-sm"
        color="primary"
        outline
        style={{
          width: '40rem'
        }}
      >
        <CardHeader className='text-center fs-3'>
          Signup Here
        </CardHeader>
        <CardBody>
          <Form onSubmit={registerUser}>
            <FormGroup>
              <Label for="exampleName">
                Name
              </Label>
              <Input 
                value={user.name}
                onChange={(event) => onFieldChange(event, 'name')}
                id="name"
                name="name"
                placeholder="Enter your Full Name"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">
                Email
              </Label>
              <Input
                value={user.email}
                onChange={(event) => onFieldChange(event, 'email')}
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">
                Password
              </Label>
              <Input
                value={user.password}
                onChange={(event) => onFieldChange(event, 'password')}
                id="password"
                name="password"
                placeholder="Enter your password here"
                type="password"
              />
            </FormGroup>
            <FormGroup>
              <Label for="address">
                Address
              </Label>
              <Input
                value={user.address}
                onChange={(event) => onFieldChange(event, 'address')}
                id="address"
                name="text"
                type="textarea"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">
                About
              </Label>
              <Input
                value={user.about}
                onChange={(event) => onFieldChange(event, 'about')}
                id="about"
                name="text"
                type="text"
                placeholder="Enter about yourself shortly"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">
                Gender
              </Label>
              <Input
                value={user.gender}
                onChange={(event) => onFieldChange(event, 'gender')}
                id="exampleSelect"
                name="select"
                type="select"
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="mobile">
                Phone number
              </Label>
              <Input
                value={user.phone}
                onChange={(event) => onFieldChange(event, 'phone')}
                id="phone"
                name="mobilenumber"
                placeholder="Enter your mobile phone number"
                type="number"
              />
            </FormGroup>
            <div className="d-flex justify-content-center">
              <Button
                color="success mt-3 me-2"
                type="submit"
              >
                Signup
              </Button>
              <Button
                onClick={reset}
                color="warning mt-3"
                type="button"
              >
                Reset
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default Signup;
