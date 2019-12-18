import React from 'react';
import Nav from './../../Nav';
import Sidebar from './../../Sidebar';
import ButtonS from './../../ButtonS';
import DatePicker from 'react-datepicker';
import {Link} from 'react-router-dom'; 
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';




function New_CustPage() {

    let [fullname,setFullname]=React.useState('');
    let [email ,setEmail] = React.useState('');
    let [contact ,setContact] = React.useState('');
    let [startDate, setStartDate] = React.useState(new Date());
    let [gender, setGender] = React.useState('');
    let [counter, setCounter] = React.useState(0);


    let history=useHistory();

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

        console.log(`form submitted:`);
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
            .then(res => console.log(res.result,res.status));

            history.push('/dashboardpage');
     
            {setFullname='';
            setEmail='';
            setContact='';
            setStartDate=new Date();
            setGender='';
            setCounter=0
        };

    }      

        
        
   
    return (
        <div>
            <header>
                <Nav/>
                <Sidebar/>
            </header>
            <main>
                <div className="newCustbox">
                    <h3>Add Member</h3>
                
                <form onSubmit={onSubmit}>
                    
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
                        
                   
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="Enter EmailId" 
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
                    
                        <label htmlFor="date">Date of Birth</label>
                        <DatePicker 
                            id="datepicker"
                            placeholder="yyyy/mm/dd"
                            selected={startDate} 
                            onChange={date => setStartDate(date)} 
                            name="startDate"
                            dateFormat="yyyy/mm/dd"
                            />

                    <br/>
                        <label className="input-container">Gender</label>
                            <input 
                                type="radio" 
                                name="gender" 
                                value="male" 
                                checked={gender === 'male'}  
                                onChange={handleGenderChange} /> Male
                            <input 
                                type="radio" 
                                name="gender" 
                                value="female"
                                checked={gender === 'female'}  
                                onChange={handleGenderChange} /> Female
                            <input 
                                type="radio" 
                                name="gender" 
                                value="other" 
                                checked={gender === 'other'}  
                                onChange={handleGenderChange} /> Other<br/>
                    
                        <label className="setcounter">Cigarette Packets</label>
                        <h4>{counter}</h4>
                        
                            <ButtonS 
                                label="+" 
                                bgColor="black"
                                textColor="white"
                                onClick={increment}
                            />
                            <ButtonS 
                                label="0" 
                                bgColor="grey" 
                                textColor="white" 
                                onClick={reset}
                            />
                            <ButtonS 
                                label="-" 
                                bgColor="black" 
                                textColor="white"
                                onClick={decrement}
                            />
                            {counter < 0 && <h5>You went below 0! Consider resetting</h5>}
                    <br/><br/>
                        <input type="submit" name = "" value="Submit"/>  
                    
                    
                </form>
            </div>
        </main>
        </div>
    );
}

export default New_CustPage;