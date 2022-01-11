import React from 'react';
import UserItem from '../UserItem';
import { Row, Table } from 'react-bootstrap';
import { useRef } from 'react';
import { useState } from 'react';


function UserList(props) {
    const { userList, handleDeleteUser, handleSearch } = props

    const lengthUser = userList.length
    const [search, setSearch] = useState('')
    const typingTimoutRef = useRef(null)

    const onSearch = (e) => {
        const input = e.target.value
        setSearch(input)

        if (typingTimoutRef.current) {
            clearTimeout(typingTimoutRef.current)
        }

        typingTimoutRef.current = setTimeout(() => {
            const formvalues = {
                search: input,
            }
            if (handleSearch) {
                handleSearch(formvalues)
            }
        }, 300)

    }
    return (
        <Row>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title mt-20 mb-40">Danh Người Dùng</h3>
                </div>

                <div className="total-money">
                    Tổng số user: {lengthUser}
                </div>

                <form className='search-product mb-20'>
                    <input className='search__input'
                        placeholder='Username bạn muốn tìm'
                        value={search}
                        onChange={onSearch}
                    />
                </form>
                <div className="panel-body">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th >STT</th>
                                <th >Mã</th>
                                <th >Tài Khoản</th>
                                <th >Mật Khẩu</th>
                                <th >Tên</th>
                                <th >Email</th>
                                <th >Hoạt Động</th>
                            </tr>
                        </thead>
                        {userList.map((item, index) => (
                            <tbody key={index}>
                                <UserItem
                                    item={item}
                                    index={index}
                                    handleDeleteUser={handleDeleteUser}
                                />
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </Row>
    );
}

export default UserList;