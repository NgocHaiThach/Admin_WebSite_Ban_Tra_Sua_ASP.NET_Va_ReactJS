import React from 'react';
import { Container, Button } from 'react-bootstrap';
import LoginForm from '../../Layout/LoginForm';


function LoginPage(props) {
    return (
        <Container>
            <LoginForm />
            <Button variant="primary">Đăng Nhập</Button>
        </Container>
    );
}

export default LoginPage;