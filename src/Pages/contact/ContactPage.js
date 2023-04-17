import React, { useState, useEffect } from "react";

const ContactPage = () => {
    //1- Use State[initial state component]
    const[contactUsForm,setcontactUsForm] = useState({
        email: '',
        message: '',
    });

    //2- Use Effect , LIFE CYCLE
    useEffect( () => {

        // LOGIC

        },

        // DEPENDENCIES
        [contactUsForm.email]
    
    );


    const contactUs = (event) => {
        event.preventDefault
    }
    return (
        <div style={{ textAlign :'center', margin: '50px auto' }}>
            <h1>Contact Us </h1>
            <form onSubmit={(e)=> contactUs(e)}>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input required id="email" type="email" value={contactUsForm.email} onChange = {(event)=> setcontactUsForm({...contactUsForm, email: event.target.value}) }></input>
                </div>

                <br></br>
                <div>
                <label htmlFor="message" >Message</label>
                <textarea required id="message" rows={5} value={contactUsForm.message} onChange = {(event)=> setcontactUsForm({...contactUsForm, message: event.target.value}) } />     
                </div>

                <button>Submit</button>
            </form>

        </div>
    );
};

export default ContactPage;























//FUNCTIONAL COMPONEMT

    // //1- Use State[initial state component]
    // const[counter,setCounter] = useState(0)
    // const increase = () => {
    //     setCounter(counter + 1);
    // };
    // const decrease = () => {
    //     setCounter(counter - 1);
    // };
    // const Reset = () => {
    //     setCounter(0);
    // };


    // <h1 style={{ textAlign: 'center'}}>Counter</h1>

    // <button onClick={increase} style={{padding: '5px 10px', margin:'10px'}}> + </button>
    // <span>Counter = {counter}</span>
    // <button onClick={decrease} style={{padding: '5px 10px' , margin:'10px'}}> - </button>
    
    // <button onClick={Reset} style={{padding: '5px 10px' , margin:'3px'}}> Reset </button>