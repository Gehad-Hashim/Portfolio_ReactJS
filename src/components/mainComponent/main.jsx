import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { Panel } from 'primereact/panel';
import { Fieldset } from 'primereact/fieldset';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CountWrapper from '../countWrapper';
import { useEffect, useState } from 'react';
import myImg from '../../assets/photo.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./main.css"
const Main = () => {
    useEffect(() => {
        // myFun();
    }, [])

    const [myusers, setMyUsers] = useState([]);
    const myFun = () => {
        fetch('https://fakestoreapi.com/users')
            .then(res => res.json())
            .then(json => setMyUsers(json))
    }

    return (
        <div>
            {/* {myusers.map(user=>{console.log(user)
                return( <div key={user.id}>{user.id}</div>)})} */}
            <h1>Hello,</h1>
            <p>I'm Gehad Hashim </p>
            <p>a front end developer</p>

            <Container>
                <Row className='justify-content-end'>
                    <Col xs={6} md={8} className='my-5'>
                        <div className='card'>

                    <Fieldset className="mx-0 " legend="Header">
                        <p >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Fieldset>
                    </div>
                    </Col>
                    <Col xs={6} md={4}>
                        <Image width={'300px'} src={myImg} roundedCircle />
                    </Col>

                </Row>
               
            </Container>
            <Container>
            <Row className='justify-content-center'>
                  
                </Row>
            </Container>
            <section id='skills'>
            <header className='fs-1'>Skills</header>
            <div className='d-col justify-content-between'>
              <ProgressBar striped variant="success" now={60}  className='skill'/>
              <ProgressBar striped variant="danger" now={40}  className='skill' />
              <ProgressBar striped variant="blue" now={80}    className='skill' />
              <ProgressBar striped variant="warning" now={90} className='skill' />
            </div>
            </section>
        </div>
    )
}
export default Main;