import React, {useContext, useState} from 'react';
import Header from '../Header';
import {useNavigate } from 'react-router-dom';
import MyContext from '../../MyContext';



const AddStuForm = () => {
    let {addstUser} = useContext(MyContext);

    const history = useNavigate();

    const initUser = {id: null, name: '', username: ''};

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.mail && user.username) {
            handleChange(e, addstUser(user));
            history('/stuuser')
        }
        
    }
    
    return (
        <div className="container aduser">
        <Header heading =" Add Student User"/>
        <form>
            <label>Name</label>
            <input className="form-control form-control-md" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Email</label>
            <input className="form-control form-control-md" type="email" value={user.mail} name="mail" onChange={handleChange} />
            <label>Username</label>
            <input className="form-control form-control-md" type="text" value={user.username} name="username" onChange={handleChange} />
            <button className="btn btn-primary" type="submit" onClick={handleSubmit} >Add user</button>
                        
        </form>
        </div>
        
    )
}

export default AddStuForm;