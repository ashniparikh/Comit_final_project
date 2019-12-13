import React from 'react';
import PropTypes from "prop-types";
import {  Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom'; 
import {useHistory} from 'react-router-dom';
import userLogo from './../../user.png';
import backgroundImg from './../../background.jpg';



function LoginForm(props){
    let [email ,setEmail] = React.useState('');
    let [password ,setPassword] = React.useState('');
    let [isInvalid, setIsInvalid] = React.useState(false);
    
    let errors = {};
    
    let history=useHistory();

    

    function handleUsernameChange(event){
        props.setUsername(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    };

    
    
    
    function handleLogin(event) {
        event.preventDefault();

        if (props.username==='Ash' && email === 'ash@gmail.com' && password === '1234@Asp') {
            
            // take them dashboard
            history.push('/dashboardpage');
        } else if (props.username==='Ashni' && email === 'ashni@gmail.com' && password === '1234@Ashni') {
            
            // take them dashboard
            history.push('/dashboardpage');
        }   
        else {
            // show an error
            setIsInvalid(true);
        };
    
    }   

    
    return(

    
    <div className="loginpage"> 
    <img src={backgroundImg} />   
    <div className="loginBox">
        <img src={userLogo} className="user"/>
        
        <h2>Login here</h2>
        
            
            {isInvalid && (
                <p style={{color: 'black'}}>
                   <b> Incorrect credentials or Empty fields</b>
                </p>
            )}
        <form onSubmit={handleLogin}>
            
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
                
                <label htmlFor="email" className="FormField__Label">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="exaples@example.com" 
                    className="FormField__Input" 
                    value={email}
                    onChange={handleEmailChange}
                />
                
                <label htmlFor="password" className="FormField__Label">Password</label>
                <input  
                    type="password" 
                    id="password" 
                    name="password" 
                    className="FormField__Input" 
                    placeholder="Enter your password" 
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    value={password}
                    onChange={handlePasswordChange}
 
                />
                
                <input type="submit" name = "" value="LogIn"/> 
                   
            
            
            <Link to="/signup" style={{justifyContent:"center"}} className="FormField__Link">Create an account</Link>
            

        </form>
        </div>
        </div>
    );
    
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired,
    
};

export default LoginForm;