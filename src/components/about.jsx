import { Button } from 'react-bootstrap';
import users from '../users/users';
import { useState,useEffect } from "react";
import { useSelector ,useDispatch} from 'react-redux';
import { getList } from "../Store/Actions/listAction";

const About = () => {
    const [name, setName] = useState('Eng-gehad');
    const [myusers, setMyUsers] = useState(users);

const skills_list=useSelector((state)=>state.listRed.list)

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
            <p>{skills_list.map(
    (s)=>{
        return(
            <div key={s.id}>
               <p style={{color:'red',fontStyle:'italic'}}>{s.name}</p>
            </div>
            )
    }
)}</p>
        </>
    )
}


export default About;