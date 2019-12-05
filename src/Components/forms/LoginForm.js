import React from 'react';
import PropTypes from "prop-types";
import { Form, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom'; 
import {useHistory} from 'react-router-dom';
import InlineError from '../messages/InlineError';



function LoginForm(props){
    let [email ,setEmail] = React.useState('');
    let [password ,setPassword] = React.useState('');
    let errors = {};
    
    let history=useHistory();

    function goToHome(){
        history.push('/dashboardpage');
    }

    function handleUsernameChange(event){
        props.setUsername(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    };

    
    function validateForm() {
    return props.username.length > 0 && email.length > 0 && password.length > 0;
    };

    function handleSubmit(event) {
    event.preventDefault();
    };
        
    
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Field error={!!errors.name}>
                <label className="FormField__Label" htmlFor="name">Username</label>
                <input 
                type="text" 
                id="name" 
                className="FormField__Input" 
                placeholder="Enter your full name" 
                name="name" 
                value={props.username} 
                onChange={handleUsernameChange}
                />
                {errors.name && <InlineError text={errors.name}/>}
            </Form.Field>
            <Form.Field error={!!errors.email}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="exaples@example.com" 
                    pattern="exaples@example.com"
                    value={email}
                    onChange={handleEmailChange}
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
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    value={password}
                    onChange={handlePasswordChange}
 
                />
                {errors.password && <InlineError text={errors.password}/>}
            </Form.Field>
            <Button onClick={goToHome} disabled={!validateForm()}>Login</Button>  
                   
            <Link to="/forgotPassword" className="FormField__Link">Forgot Password?</Link>/
            <Link to="/forgotEmail" className="FormField__Link">Forgot Email?</Link>
            <Form.Field>
            <Link to="/signup" className="FormField__Link">Create an account</Link>
            </Form.Field>

        </Form>
    );
    
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired,
    
};

export default LoginForm;