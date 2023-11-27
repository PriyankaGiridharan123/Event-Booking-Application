import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EventService from '../Service/EventService';
import './CreateEvent.css';
const CreateEvent=()=> {

  const[event,setevent]=useState('');
  const[price,setprice]=useState('');
  const[date,setdate]=useState('');
  const[venue,setvenue]=useState('');
  const[available,setavailable]=useState('');
  const {id} = useParams();
    const saveOrUpdate = (e) => 
    {
      e.preventDefault();
     
      if (date.length === 0 || venue.length === 0 || event.length === 0 || price.length === 0|| available.length === 0) {
        alert("Enter all the details");
      } 
      if (isNaN(price)) {
        alert("Please enter a valid numeric price.");
        return;
      }
      if (isNaN(available)) {
        alert("Please enter a valid numeric available count.");
        return;
      }
    
      else{
        if (window.confirm("Event Added!") == true) {
          e.preventDefault();
          const eventt = {id,event,price,date,venue,available}
          if(id){
            EventService.updateEvent(id, eventt).then((response) => {
              nav('/viewevent')
              
            }).catch(error => {
              console.log(error)
              
              })
  
          }else{
              EventService.createEvent(eventt).then((response) =>{
                  console.log(response.data)
                  nav('/viewevent');
              }).catch(error => {
                  console.log(error)
              })
          }
        }
      }
    } 
  
      useEffect(() => {
          EventService.getEventById(id).then((response) =>{
              setprice(response.data.price)
              setevent(response.data.event)
              setdate(response.data.date)
              setvenue(response.data.venue)
              setavailable(response.data.available)

          }).catch(error => {
              console.log(error)
          })
      }, [])
      const nav=useNavigate();
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);

      const title = () => {

        if(id){
            return <h1>Update Event</h1>
        }else{
            return <h1>Ready to Add Event?</h1>
        }
    }
  return (
    <div id="body">
    <div className='create-event-container'>
    <div className="signup-form1">
    <div className="container">
      <div className="header">
        {title()}
        <p>Enter Event Details</p>
      </div>
      <form>
      
        <div className="input">
          <input type="text" placeholder="Type of Event" value={event} onChange={(e)=>setevent(e.target.value)}>
        </input>
        </div>
        <div className="input">
          <input type="text" placeholder="Price" value={price} pattern="[0-9]+"   onChange={(e)=>setprice(e.target.value)} />
        </div>
        <div className="input">
          <input type="date" placeholder="date of event" value={date} onChange={(e)=>setdate(e.target.value)}/>
        </div>
        <div className="input">
          <input type="text" placeholder="Venue & Time" value={venue} onChange={(e)=>setvenue(e.target.value)}/>
        </div>
        <div className="input">
          <input type="text" placeholder="Available Ticket" value={available} pattern="[0-9]+"   onChange={(e)=>setavailable(e.target.value)} />
        </div>
        <input onClick={saveOrUpdate} className="e-signup-btn" type="submit" value="Submit" />
      <Link to="/dashboard">  <button className="e-cancel-btn" >Go Back </button></Link>
        </form>
    </div>
  </div>
  </div>
    </div>
  )
}

export default CreateEvent