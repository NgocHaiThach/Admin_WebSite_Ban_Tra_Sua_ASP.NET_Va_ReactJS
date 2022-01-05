import React from 'react';
import { Container, } from 'react-bootstrap';
import LoginForm from '../../Layout/LoginForm';
import cookies from 'react-cookies';
import RequestApi from '../../Utils/RequestApi';
import { useHistory } from "react-router-dom";


function LoginPage(props) {

    const history = useHistory()
    const handleLogin = async (data) => {
        try {
            await RequestApi('api/admins/login', 'POST', {
                username: data.username,
                password: data.password,
            })
                .then(res => {
                    // console.log('res', res)
                    if (res.status === 200) {
                        cookies.save('admin', res.data)
                    }
                    else if (res.status === 400) {
                        console.log('dang nhap that bai')
                        // loginFaild = true
                    }
                })
                .catch(err => { console.log(err) })

            history.push('/home')

        }
        catch (err) {
            console.log(err.response)
        }
    }

    return (
        <Container className='ml-200'>
            <LoginForm handleLogin={handleLogin} />
        </Container>
    );
}

export default LoginPage;