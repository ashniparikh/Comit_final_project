import React from 'react';

function LoginPage() {
    return (
        <div>
            <h1>Login Here!</h1>
        
            <label for="email">Email</label>
            <input 
                type="email" 
                id="email"
                name="email"
                pattern=".+@globex.com"  
                placeholder="Enter your emailid" required />

            <br/>
            <label htmlFor="password">Password</label>
            <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Enter your password" required />

                <button >Login</button>
        </div>
    )
}
export default LoginPage;