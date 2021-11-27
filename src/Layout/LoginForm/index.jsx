import React from 'react';
import { Row } from 'react-bootstrap';


function LoginForm(props) {
    return (
        <Row>
            <h3 className="mt-20">Đăng Nhập</h3>
            <form className="mt-20">
                <p className="form-group">
                    <label>Tài Khoản</label>
                    <input className="form-control max-width-400" type="text" />
                </p>
                <p className="form-group">
                    <label>Mật Khẩu</label>
                    <input className="form-control max-width-400" type="password" />
                </p>
            </form>

        </Row>
    );
}

export default LoginForm;