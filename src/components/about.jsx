import { Button } from 'react-bootstrap';
import users from '../users/users';
import { useState } from "react";

const About = () => {
    const [name, setName] = useState('Eng-gehad');
    const [myusers, setMyUsers] = useState(users);



    const showMsg = () => {
        // alert('hello from react');
        setName('heba');
        console.log(name);

setMyUsers(...myusers,{
    id: 3,
    name: 'noha'
})
       


    }



    return (
        <>
            <p>we r n about page</p>
            <Button onClick={()=>showMsg} >contact me</Button>
            <div style={{ color: 'blue' }}>{name}</div>

            <p>{myusers.map(
    (user)=>{
        return(
            <div key={user.id}>
               <p style={{color:'red',fontStyle:'italic'}}>{user.name}</p>
            </div>
            )
    }
)}</p>
        </>
    )
}


export default About;