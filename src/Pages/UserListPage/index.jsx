import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import UserList from '../../Layout/UserList';
import requestApi from '../../Utils/RequestApi';
import cookies from 'react-cookies';
import { FormatInput } from '../../Utils/FormatInput';

function UserListPage(props) {

    const adminInfo = cookies.load('admin')

    const [input, setInput] = useState('')
    const [userList, setUserList] = useState([])
    const [listToSearch, setListToSearch] = useState([])

    const getUser = async () => {
        const res = await requestApi('api/users', 'GET')
        setUserList(res.data)
    }

    //get api lưu vào ListToSearch để cho việc filter 
    const getToSearch = async () => {
        const res = await requestApi('api/users', 'GET')
        setListToSearch(res.data)
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        getToSearch()
    }, [input])

    const handleSearch = (input) => {

        const val = FormatInput(input.search)
        const filter = listToSearch.filter((item) => {
            const name = FormatInput(item.userName)
            if (name.includes(val)) {
                return item
            }
        })
        setUserList(filter)
        setInput(input)
    }

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
                    handleSearch={handleSearch}
                />
            </Container>}
        </>
    );
}

export default UserListPage;