import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import cookies from 'react-cookies';
import { Link, useHistory } from 'react-router-dom';


function Menu(pros) {

    const adminInfo = cookies.load('admin')
    const history = useHistory()

    const handleLogout = () => {
        cookies.remove('admin')
        history.push('/login')
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="home">Ottel SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="menu__link" to="/home">
                            {adminInfo !== undefined ? "Trang Chủ" : ''}
                        </Link>
                        <Link className="menu__link" to="/products">
                            {adminInfo !== undefined ? "Quản Lý Sản Phẩm" : ''}
                        </Link>
                        <Link className="menu__link" to="/categories">
                            {adminInfo !== undefined ? "Quản Lý Loại Sản Phẩm" : ''}
                        </Link>
                        <Link className="menu__link" to="/users">
                            {adminInfo !== undefined ? "Quản Lý Users" : ''}
                        </Link>
                        <Link className="menu__link" to="/bills">
                            {adminInfo !== undefined ? "Quản Lý Hóa Đơn" : ''}
                        </Link>
                        <Link className="menu__link" to="/chart_product">
                            {adminInfo !== undefined ? "Biểu đồ" : ''}
                        </Link>
                        <p className="menu__link">
                            {adminInfo !== undefined ? adminInfo.resultAdmin.fullName : ''}
                        </p>
                        <Link className="menu__link" to="/login">
                            {adminInfo === undefined ? 'Đăng nhập' : '  '}
                        </Link>
                        <p className="menu__link" onClick={handleLogout}>
                            {adminInfo !== undefined ? 'Đăng xuất' : ''}
                        </p>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Menu;