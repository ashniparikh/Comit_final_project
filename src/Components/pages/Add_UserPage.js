import React from 'react';
import Nav from './../../Nav';
import Sidebar from './../../Sidebar';


function Add_UserPage() {

    let [gender, setGender] = React.useState('');
    let [userName,setUsername]=React.useState('');
    let[fullname,setFullname]=React.useState('');
    let [email ,setEmail] = React.useState('');
    let [contact ,setContact] = React.useState('');
    let [empid ,setEmpid] = React.useState('');
    let [address ,setAddress] = React.useState('');
    let [startDate, setStartDate] = React.useState(new Date());

    function handleGenderChange(event) {
        setGender(event.currentTarget.value);
      }
 
    function handleFullnameChange(event){
        setFullname(event.target.value);
    }
    function handleUsernameChange(event){
        setUsername(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }
    function handleContact(event){
        setContact(event.target.value);
    }

    function handleEmpidChange(event){
        setEmpid(event.target.value);
    }
    function handleAddressChange(event){
        setAddress(event.target.value);
    }


    return (
        <div>
            <header>
                <Nav/>
                <Sidebar/>
            </header>
            <main>
                <div className="newCustbox">
                    <h3>Add Employee</h3>
                
                <form >
                    
                        <label className="labelusername" htmlFor="name">Username</label>
                        <input 
                        type="text" 
                        id="username" 
                        className="username" 
                        placeholder="Enter Username" 
                        name="username"
                        required 
                        value={userName}
                        onChange={handleUsernameChange}
                        />
                    
                        <label className="labelfullname" htmlFor="name">Fullname</label>
                        <input 
                        type="text" 
                        id="fullname" 
                        className="fullname" 
                        placeholder="Employee's Full Name" 
                        name="fullname" 
                        required
                        value={fullname}
                        onChange={handleFullnameChange}
                        />
                    
                        <label className="labelid" htmlFor="name">Employee Id</label>
                        <input 
                        type="number" 
                        id="empid" 
                        className="empid" 
                        placeholder="Employee Id" 
                        name="empid" 
                        value={empid}
                        required
                        onChange={handleEmpidChange}
                        />
                    
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter EmailId" 
                            required
                            value={email}
                            onChange={handleEmailChange}
                        />
                        <label htmlFor="contact">Contact</label>
                        <input 
                            type="tel" 
                            id="contact" 
                            name="contact" 
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Enter Contact number" 
                            value={contact}
                            onChange={handleContact}
                            
                        />
                        <label className="labeladdress" htmlFor="name">Address</label>
                        <input 
                        type="text" 
                        id="address" 
                        className="address" 
                        placeholder="Employee's Address" 
                        name="address" 
                        required
                        value={address}
                        onChange={handleAddressChange}
                        />
                    
                        <label htmlFor="date">Date of Birth</label>
                        <input 
                        type="date" 
                        name="date"
                        dateFormat="yyyy/MM/dd"
                        required
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        />
                    
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
                   
                                <br/><br/>
                        <input type="submit" name = "" value="Add User"/> 
                    
                    

                </form>
                </div>
            </main>
        </div>
    );
}

export default Add_UserPage;