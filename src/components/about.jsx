import { Button, Container } from 'react-bootstrap';
import users from '../users/users';
import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getList } from "../Store/Actions/listAction";
import { LangContext } from '../Context/langContext';

const About = () => {
    const [name, setName] = useState('Eng-gehad');
    const [myusers, setMyUsers] = useState(users);
    const {contextLang, setContextLang} = useContext(LangContext);

    const skills_list = useSelector((state) => state.listRed.list)

    const showMsg = () => {
        // alert('hello from react');
        setName('heba');
        console.log(name);

        setMyUsers(...myusers, {
            id: 3,
            name: 'noha'
        })



    }



    return (
        <>
            <p>we r n about page</p>
            <Container>

            <h1>{contextLang}</h1>
            <Button className='mb-3'
             onClick={() => setContextLang(`${contextLang=="en from context"?'Ar from context':'en from context'}`)}
                          >change context</Button><br/>
            <Button onClick={() => showMsg} >contact me</Button>
            <div style={{ color: 'blue' }}>{name}</div>

            <p>{myusers.map(
                (user) => {
                    return (
                        <div key={user.id}>
                            <p style={{ color: 'red', fontStyle: 'italic' }}>{user.name}</p>
                        </div>
                    )
                }
            )}</p>
            <p>{skills_list.map(
                (s) => {
                    return (
                        <div key={s.id}>
                            <p style={{ color: 'red', fontStyle: 'italic' }}>{s.name}</p>
                        </div>
                    )
                }
            )}</p>
                </Container>
        </>
    )
}


export default About;