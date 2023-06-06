import React from 'react';
import Header from '../Header';
import { Link } from 'react-router-dom';

const MentorUser = (props) => {
    return (
        <div className="container">
        <Header heading ="View Mentor User"/>
        <Link to ="/addMen">
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
                { props.users.length > 0 ? (
                    props.users.map(user => {
                        const {id, name, mail, username} = user;
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{mail}</td>
                                <td>{username}</td>
                                <td>
                                    <button className ="btn btn-danger" onClick={() => props.deleteUser(id)}>Delete</button>
                                    <Link to = "/editmen">
                                    <button className ="btn btn-primary" onClick={() => props.editUser(id, user)}>Edit</button>
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

export default MentorUser;