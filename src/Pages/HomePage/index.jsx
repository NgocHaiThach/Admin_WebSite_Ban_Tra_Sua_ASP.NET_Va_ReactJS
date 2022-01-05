import React from 'react';
import { Container } from 'react-bootstrap';
import cookies from 'react-cookies';

function HomePage(props) {
    const adminInfo = cookies.load('admin')

    return (
        <Container>
            {adminInfo === undefined ? "Vui lòng đăng nhập" : "Trang chủ"}
        </Container>
    );
}

export default HomePage;