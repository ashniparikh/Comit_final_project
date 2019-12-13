import React from 'react';
import Nav from './../../Nav';
import { Form, Button } from 'semantic-ui-react';

function Add_UserPage() {

    let [gender, setGender] = React.useState('');
    let [startDate, setStartDate] = React.useState(new Date());
    function handleGenderChange(event) {
        setGender(event.currentTarget.value);
      }

    return (
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <div>
                    <h1>Add Employee</h1>
                </div>
                <Form >
                    <Form.Field >
                        <label className="labelusername" htmlFor="name">Username</label>
                        <input 
                        type="text" 
                        id="username" 
                        className="username" 
                        placeholder="Enter Username" 
                        name="username" 
                        
                        />
                        
                    </Form.Field>
                    <Form.Field >
                        <label className="labelfullname" htmlFor="name">Fullname</label>
                        <input 
                        type="text" 
                        id="fullname" 
                        className="fullname" 
                        placeholder="Employee's Full Name" 
                        name="fullname" 
                        
                        />
                        
                    </Form.Field>
                    <Form.Field>
                        <label className="labelid" htmlFor="name">Employee Id</label>
                        <input 
                        type="number" 
                        id="empid" 
                        className="empid" 
                        placeholder="Employee Id" 
                        name="empid" 
                        
                        />
                    </Form.Field>
                    
                    
                    <Form.Field >
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter EmailId" 
                            
                            
                        />
                        
                    </Form.Field>
                    <Form.Field >
                        <label htmlFor="date">Date of Birth</label>
                        <input 
                        type="date" 
                        name="date"
                        dateFormat="yyyy/MM/dd"
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        />
                        
                    </Form.Field>
                    <Form.Field >
                        <label className="input-container">Gender</label>
                            <input 
                                type="radio" 
                                name="gender" 
                                value="m" 
                                checked={gender === 'm'}  
                                onChange={handleGenderChange} /> M
                            <input 
                                type="radio" 
                                name="gender" 
                                value="f"
                                checked={gender === 'f'}  
                                onChange={handleGenderChange} /> F
                            <input 
                                type="radio" 
                                name="gender" 
                                value="o" 
                                checked={gender === 'o'}  
                                onChange={handleGenderChange} /> O
                    </Form.Field>
                        
                    
                    <Button >Add</Button>  
                        
                    
                    

                </Form>
            </main>
        </div>
    );
}

export default Add_UserPage;