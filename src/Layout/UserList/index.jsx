import React from 'react';
import UserItem from '../UserItem';
import { Row, Table } from 'react-bootstrap';


function UserList(props) {
    const { userList } = props
    return (
        <Row>
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Người Dùng</h3>
                </div>
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
                                <UserItem item={item} index={index} />
                            </tbody>
                        ))}
                    </Table>
                </div>
            </div>
        </Row>
    );
}

export default UserList;