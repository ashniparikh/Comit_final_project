import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Nav from './../../Nav';

function User_ProfilePage(props) {
    
    return (
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <div className="userprofile">
                {props.User_Details.map(function(User_Detail) {
                    return (

                        <Form>
                        <Form.Field>
                            <h2>{User_Detail.fullname}</h2>
                        </Form.Field> 
                        
                        <Form.Field>
                            <lable>Username:</lable>
                            <input type="name" value={User_Detail.username}/>
                        </Form.Field>
                        <Form.Field>
                            <lable>Email Id:</lable>
                            <input type="email" value={User_Detail.emailid}/>
                        </Form.Field>    
                        <Form.Field>
                            <lable>Employee Id:</lable>
                            <input type="number" value={User_Detail.empid}/>
                        </Form.Field>
                        <Form.Field>         
                            <lable>Contact No:</lable>
                            <input type="contact" value={User_Detail.contact}/>
                        </Form.Field> 
                        <Form.Field>
                            <lable>Address:</lable>
                            <input type="text" value={User_Detail.address}/>
                        </Form.Field>      
                        <Form.Field>   
                            <lable>Date of Birth:</lable>
                            <input type="text" value={User_Detail.dob}/>
                        </Form.Field>
                        <Form.Field>
                            <lable>Gender:</lable>
                            <input type="text" value={User_Detail.gender}/>
                        </Form.Field>
                        <Form.Field>
                            <lable>Date of Joining:</lable>
                            <input type="text" value={User_Detail.joiningDate}/>
                        </Form.Field>
                        </Form>
                    )
                })}
                </div>
            </main>
        </div>
    );
}

export default User_ProfilePage;