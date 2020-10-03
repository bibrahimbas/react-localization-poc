import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import './home.css'

function Home() {
    return (
        <>
            <Row className='menu-item'>
                <Col md={{span:4, offset:4}}><Button href='/settings' size='lg' block>Settings</Button></Col>
            </Row>
            <Row>
                <Col md={{span:4, offset:4}}><Button href='/main' size='lg' block>Main</Button></Col>
            </Row>
        </>
    )
}

export default Home;