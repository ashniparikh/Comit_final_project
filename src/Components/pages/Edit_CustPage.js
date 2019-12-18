import React,{useEffect } from 'react';
import Nav from './../../Nav';
import Sidebar from './../../Sidebar';
import ButtonS from './../../ButtonS';
import {Link} from 'react-router-dom'; 
import {useHistory} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import moment from 'moment';




function Edit_CustPage(props) {

    let [fullname,setFullname]=React.useState('');
    let [email ,setEmail] = React.useState('');
    let [contact ,setContact] = React.useState('');
    let [startDate, setStartDate] = React.useState(new Date());
    let [gender, setGender] = React.useState('');
    let [counter, setCounter] = React.useState(0);
    let[hasError, setErrors] = React.useState(false);
    let [rewardCounter,setRewardCounter]=React.useState(0);
    
    let history=useHistory();


    useEffect(() => {
        async function fetchData(){
            const res = await fetch('http://localhost:4000/backend_db/'+props.match.params.id);
            res
                .json()
                .then(res => {
                    console.log(res)
                    {setFullname(res.fullname)};
                    {setEmail(res.email)};
                    {setContact(res.contact)};
                    {setStartDate(res.dob)};
                    {setGender(res.gender)};
                    {setCounter(res.purchasedCiggratePak)}
                })
                .catch(err => setErrors(err));
        }

    fetchData();
  },[]);

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

      function increment(e) {
        e.preventDefault();
        setCounter(counter + 1);
      }
    
      function decrement(e) {
        e.preventDefault();
        setCounter(counter - 1); 
      }
    
      function reset(e) {
        e.preventDefault();
        setCounter(0);
      }

      function handleRewardChange(e){
            e.preventDefault();
            setCounter( Math.trunc(counter-10));

      }
      function onSubmit(e){
        e.preventDefault();
        const obj = {
            fullname:fullname,
            email:email,
            contact:contact,
            dob:startDate,
            gender:gender,
            purchasedCiggratePak:counter
        };
        axios.post('http://localhost:4000/backend_db/update/'+props.match.params.id, obj)
            .then(res => console.log(res));

        history.push('/dashboardpage');

      }
   
    return (
        <div>
            <header>
                <Nav/>
                <Sidebar/>
            </header>
            <main>
                <div className="newCustbox">
                    <h3>Current Member</h3>
                

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
                             value={startDate}
                            onChange={date => setStartDate(date)} 
                            name="startDate"
                            dateFormat="yyyy/mm/dd"
                            /><br/>
                    
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
                                onChange={handleGenderChange} /> Other
                    <br/>
                        <label className="setcounter">Cigarette Packet</label>
                        <h4>{counter}</h4>
                        
                            <ButtonS 
                                label="Increase" 
                                bgColor="black"
                                textColor="white"
                                onClick={increment}
                            />
                            <ButtonS 
                                label="Reset" 
                                bgColor="grey" 
                                textColor="white" 
                                onClick={reset}
                            />
                            <ButtonS 
                                label="Decrease" 
                                bgColor="black" 
                                textColor="white"
                                onClick={decrement}
                            />
                        
                        {counter < 0 && <h5>You went below 0! Consider resetting</h5>}
                        
                        <div className="rewardinput">
                        <label htmlFor="number" className="rewardlabel">Reward Point</label>
                        <input 
                            type="number" 
                            className="rewardInput"
                            value={ Math.trunc(counter/10)}
                            />
                        {counter>=10 && <h5>Congratulations!!You have earned reward point</h5>}
                        <button className="redeemButton" onClick={handleRewardChange}>Redeem point</button>    
                                                            
                        </div>

                        <br/>
                        <input type="submit" name = "" value="Update"/> 
                    
                    
                </form>
                </div>
            </main>  

       </div>
    );
}

export default Edit_CustPage;
