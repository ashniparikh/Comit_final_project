import React from 'react';
import PropTypes from "prop-types";
import { Form, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import Validator from 'validator'; 
import InlineError from '../messages/InlineError';


class LoginForm extends React.Component{
    state ={
        data:{
            email:'',
            password:''
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
        if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
        if (!data.password) errors.password = "Can't be empty";
        return errors;
      };

    render(){
        const {data,errors}=this.state;
    
    return(
        <Form onSubmit={this.onSubmit}>
            <Form.Field error={!!errors.email}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="exaples@example.com" 
                    value={data.email}
                    onChange={this.onChange}
                />
                {errors.email && <InlineError text={errors.email}/>}
            </Form.Field>

            <Form.Field error={!!errors.password}>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Enter your password" 
                    value={data.password}
                    onChange={this.onChange}
                />
                {errors.password && <InlineError text={errors.password}/>}
            </Form.Field>
            <Button primary>Login</Button>
            <Link to="/signup" className="FormField__Link">Create an account</Link>

        </Form>
    );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;