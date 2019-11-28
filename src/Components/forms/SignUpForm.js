import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import Validator from 'validator'; 
import { Form, Button } from 'semantic-ui-react';
import InlineError from '../messages/InlineError';



class SignUpForm extends Component {
    state ={
        data:{
            name:'',
            email:'',
            password:'',
            confirmpassword:''
        },
        loading:false,
        errors:{}
    };

    onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        
    };  

    validate = data => {
        const errors = {};
        if (!data.name) errors.name = "Can't be empty";
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be empty";
        if (!data.confirmpassword) errors.confirmpassword = "Can't be empty";
        if(data.password!==data.confirmpassword)errors.confirmpassword =" Passwords didn't match. Try again.";
        return errors;
      };

    render(){
        const {data,errors}=this.state;
        return (
        
            <Form onSubmit={this.onSubmit} className="FormFields">
              <Form.Field error={!!errors.name}>
                <label className="FormField__Label" htmlFor="name">User Name</label>
                <input 
                type="text" 
                id="name" 
                className="FormField__Input" 
                placeholder="Enter your full name" 
                name="name" 
                value={data.name} 
                onChange={this.onChange}
                 />
                 {errors.name && <InlineError text={errors.name}/>}
              </Form.Field>
              <Form.Field error={!!errors.email}>
                <label className="FormField__Label" htmlFor="email">Email</label>
                <input 
                type="email" 
                id="email" 
                className="FormField__Input" 
                placeholder="Enter your email" 
                name="email" 
                value={data.email}
                onChange={this.onChange}
                />
                {errors.email && <InlineError text={errors.email}/>}
              </Form.Field>
              <Form.Field error={!!errors.password}>
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input 
                type="password" 
                id="password" 
                className="FormField__Input" 
                placeholder="Enter your password" 
                name="password" 
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                value={data.password}
                onChange={this.onChange}
                 />
                 {errors.password && <InlineError text={errors.password}/>}
              </Form.Field>
              <Form.Field error={!!errors.confirmpassword}>
                <label className="FormField__Label" htmlFor="confirmpassword">Confirm Password</label>
                <input 
                type="password" 
                id="confirmpassword" 
                className="FormField__Input" 
                placeholder="Confirm Password" 
                name="confirmpassword" 
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                value={data.cofirmpassword} 
                onChange={this.onChange}
                 />
                 {errors.confirmpassword && <InlineError text={errors.confirmpassword}/>}
              </Form.Field>
              

              

              <Form.Field>
                  <Button className="FormField__Button mr-20">Sign Up</Button> 
                  <Link to="/login" className="FormField__Link">I'm already member</Link>
              </Form.Field>
            </Form>
          
        );
    }
}
SignUpForm.propTypes = {
    submit: PropTypes.func.isRequired
};
export default SignUpForm;