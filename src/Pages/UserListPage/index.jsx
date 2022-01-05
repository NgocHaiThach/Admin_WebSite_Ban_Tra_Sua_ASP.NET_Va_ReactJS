import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import UserList from '../../Layout/UserList';
import requestApi from '../../Utils/RequestApi';
import cookies from 'react-cookies';

function UserListPage(props) {

    const adminInfo = cookies.load('admin')

    const [userList, setUserList] = useState([])

    const getUser = async () => {
        const res = await requestApi('api/users', 'GET')
        setUserList(res.data)
    }

    useEffect(() => {
        getUser()
    }, [])

    const handleDeleteUser = async (id) => {
        try {
            await requestApi(`api/users/${id}`, 'DELETE')
            getUser()
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            {adminInfo && <Container>
                <UserList userList={userList}
                    handleDeleteUser={handleDeleteUser}
                />
            </Container>}
        </>
    );
}

export default UserListPage;