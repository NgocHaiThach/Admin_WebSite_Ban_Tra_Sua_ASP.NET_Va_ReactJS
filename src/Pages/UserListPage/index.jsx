import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import UserList from '../../Layout/UserList';
import requestApi from '../../Utils/RequestApi';

function UserListPage(props) {

    const [userList, setUserList] = useState([])

    const getUser = async () => {
        const res = await requestApi('api/users', 'GET')
        setUserList(res.data)
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <Container>
            <UserList userList={userList} />
        </Container>
    );
}

export default UserListPage;