import React from 'react';
import Nav from './../../Nav';
import ButtonS from './../../ButtonS';
import { Form, Button } from 'semantic-ui-react';
import {Link} from 'react-router-dom'; 
import axios from 'axios';



function New_CustPage() {

    let [fullname,setFullname]=React.useState('');
    let [email ,setEmail] = React.useState('');
    let [contact ,setContact] = React.useState('');
    let [startDate, setStartDate] = React.useState(new Date());
    let [gender, setGender] = React.useState('');
    let [counter, setCounter] = React.useState(0);


    function handleFullnameChange(event){
        setFullname(event.target.value);
    }

    function handleEmailChange(event){
        setEmail(event.target.value);
    }
    function handleContact(event){
        setContact(event.target.value);
    }

    function handleGenderChange(event) {
        setGender(event.currentTarget.value);
      }

      function increment(event) {
        event.preventDefault();
        setCounter(counter + 1);
      }
    
      function decrement(event) {
        event.preventDefault();
        setCounter(counter - 1); 
      }
    
      function reset(event) {
        event.preventDefault();
        setCounter(0);
      }

      function onSubmit(event) {
        event.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Fullname:${fullname}`);
        console.log(`Email:${email}`);
        console.log(`Contact Number:${contact}`);
        console.log(`Date of Birth:${startDate}`);
        console.log(`Gender :${gender}`);
        console.log(`PurchasedCig:${counter}`);   

        const newCust = {
            fullname: fullname,
            email: email,
            contact: contact,
            dob: startDate,
            gender: gender,
            purchasedCiggratePak: counter,

        }

        axios.post('http://localhost:4000/backend_db/add', newCust)
            .then(res => console.log(res.result));
     
            {setFullname='';
            setEmail='';
            setContact='';
            setStartDate='';
            setGender='';
            setCounter=0
        };

    }      

        
        
   
    return (
        <div>
            <header>
                <Nav/>
            </header>
            <main>
                <div>
                    <h1>Add Member</h1>
                </div>
                <Form onSubmit={onSubmit}>
                    <Form.Field >
                        <label className="labelfirstname" htmlFor="name">Fullname</label>
                        <input 
                        type="text" 
                        id="fullname" 
                        className="fullname" 
                        placeholder="Enter Full Name" 
                        name="fullname" 
                        value={fullname}
                        onChange={handleFullnameChange}
                        
                        />
                        
                    </Form.Field>
                    
                    <Form.Field >
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter EmailId" 
                            value={email}
                            onChange={handleEmailChange}
                            
                            
                        />
                        
                    </Form.Field>
                    <Form.Field >
                        <label htmlFor="contact">Contact</label>
                        <input 
                            type="tel" 
                            id="contact" 
                            name="contact" 
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            placeholder="Enter Contact number" 
                            value={contact}
                            onChange={handleContact}
                            
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
                        
                   <Form.Field>
                        <label className="setcounter">No. of CiggratePak</label>
                        <h4>{counter}</h4>
                        <div className="button-container">
                            <ButtonS 
                                label="+" 
                                bgColor="green"
                                textColor="white"
                                onClick={increment}
                            />
                            <ButtonS 
                                label="reset" 
                                bgColor="yellow" 
                                textColor="black" 
                                onClick={reset}
                            />
                            <ButtonS 
                                label="-" 
                                bgColor="red" 
                                textColor="white"
                                onClick={decrement}
                            />
                        </div>
                        {counter < 0 && <h5>You went below 0! Consider resetting</h5>}
                        

                    </Form.Field>
                    
                    <Button >Submit</Button>  
                    
                    
                </Form>
            </main>
        </div>
    );
}

export default New_CustPage;