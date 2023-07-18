import users from '../users/users';
import { useState } from "react";

const About = () => {
    const [name, setName] = useState('Eng-gehad');
    const [myusers, setMyUsers] = useState(users);



    const showMsg = () => {
        // alert('hello from react');
        setName('heba');
        console.log(name);

setMyUsers([...myusers,{
    id: 3,
    name: 'noha'
}])
       


    }



    return (
        <div>
            <p>we r n about page</p>
            <button onClick={showMsg} className="myBtn" >contact me</button>
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
        </div>
    )
}


export default About;