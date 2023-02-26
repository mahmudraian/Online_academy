import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';
import Rightsidenav from '../Component/Pages/RightSideNav/Rightsidenav';

const Main = () => {
    return (
        <>
        <Header></Header>
        <Container>
    <Row>
        <Col lg="9"><Outlet></Outlet></Col>
        <Col lg="3"><Rightsidenav></Rightsidenav></Col>
      </Row>
    </Container>
    </>
       
)
    }

export default Main;