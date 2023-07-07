import React, { useState } from 'react';
import './User.css'

const User = (props) => {
    const {name, email, phone, picture} = props.user.user;
    const addMember = props.addMember;
    const named = el=> el.toUpperCase()
    const fullName = `${named(name.title)} ${named(name.first)} ${named(name.last)}`
    const [mobile, setMobile] = useState('')

    const addPhone = ()=> {
        setMobile(phone)
    } 
    return (
        <div className='user'>
            <div className='first'>
            <img src={picture.large} alt=''/>
            </div>
           <div className='second'>
           <h2>Name : {fullName}</h2> 
           <p>Email : {email} </p>
            <p>Learn detail about me</p>
            <h4>Phone : {mobile}</h4>
            <button onClick={addPhone}>See my Number</button>
            <button onClick={()=>addMember(fullName)} target ='_blank'>Add me</button>
           </div>
        </div>
    
    );
};

export default User;