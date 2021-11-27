import React from 'react';
import { Button } from 'react-bootstrap';


function UserItem(props) {
    const { item, index } = props
    return (
        <tr>
            <td >{index + 1}</td>
            <td >{item.userId}</td>
            <td >{item.userName}</td>
            <td >{item.password}</td>
            <td >{item.fullName}</td>
            <td >{item.email}</td>
            <td className="col-lg-2">
                <Button variant="danger" className="ml-5">Khóa</Button>
            </td>
        </tr>
    );
}

export default UserItem;