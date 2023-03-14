import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { app } from '../firebaseInit'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = ({history}) => {
    const auth = getAuth(app);
    const [form, setForm] = useState({
        email: 'user21@email.com',
        password: '12341234'
    })
    const {email, password} = form;
    const onChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(form);
        signInWithEmailAndPassword(auth, email, password)
        .then((success)=>{
            alert("로그인성공!");
            sessionStorage.setItem('email', email);
            history.go(-1);
        })
        .catch((error)=>{
            alert("로그인실패!" + error.message);
        })
    } 
    return (
        <Row className='my-5 justify-content-center'>
            <Col md={6}>
                <Card style={{width: '30rem'}}>
                    <Card.Title className='p-3 text-center'>
                        <h3>Login</h3>
                    </Card.Title>
                    <Card.Body>
                        <Form onSubmit={onSubmit} className='mb-2'>
                            <Form.Control placeholder='Email' className='mb-3'
                                name="email" onChange={onChange} value={email}/>
                            <Form.Control placeholder='Password' className='mb-3'
                                name="password" onChange={onChange} value={password}
                                type="password"/>
                            <Button type="submit" style={{width:'100%'}}>로그인</Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}

export default Login