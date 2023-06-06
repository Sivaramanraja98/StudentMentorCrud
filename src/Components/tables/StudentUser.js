import React, { useContext } from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';
import MyContext from '../../MyContext';

const StudentUser = () => {
    let {users, deletestUser, editUser } = useContext(MyContext);
    return (
        <div className="container">
        <Header heading ="View Student User"/>
        <Link to ="/addstu">
        <button className='addbtn'>Add User</button>
        </Link>
        <table className='table table-dark table-hover .table-responsive'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map(user => {
                        const {id, name, mail, username} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{mail}</td>
                                <td>{username}</td>
                                <td>
                                    <button className ="btn btn-danger" onClick={() => deletestUser(id)}>Delete</button>
                                    <Link to = "/editstu">
                                    <button className ="btn btn-primary" onClick={() => editUser(id, user)}>Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={4}>No users found</td>
                    </tr>
                )   
                }
            </tbody>
        </table>
        </div>
    )
}

export default StudentUser;