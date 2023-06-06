import React, {useContext, useState} from 'react';
import Header from '../Header';
import {useNavigate } from 'react-router-dom';
import MyContext from '../../MyContext';



const AddMenForm = () => {
    let {addmrUser} = useContext(MyContext)

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
            handleChange(e,addmrUser(user));
            history('/menuser')
        }
        
    }
    
    return (
        <div className="container aduser">
        <Header heading =" Add Mentor User"/>
        <form>
            <div className='form-group'>
            <label>Name</label>
            <input className="form-control form-control-md" type="text" value={user.name} name="name" onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label >Email</label>
            <input className="form-control form-control-md" type="email" value={user.mail} name="mail" onChange={handleChange} />
            </div>
            <div className='form-group'>
            <label>Username</label>
            <input className="form-control form-control-md" type="text" value={user.username} name="username" onChange={handleChange} />
            </div>
            <div>
            <button className="btn btn-primary" type="submit" onClick={handleSubmit} >Add user</button>
            </div>            
        </form>
        </div>
        
    )
}

export default AddMenForm;