import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Menu(pros) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="home">HD SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/home">Trang Chủ</Nav.Link>
                        <Nav.Link href="/products">Quản Lý Sản Phẩm</Nav.Link>
                        <Nav.Link href="/users">Quản Lý Users</Nav.Link>
                        <Nav.Link href="/login">Đăng Nhập</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;