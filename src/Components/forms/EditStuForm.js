import React, {useContext, useState} from 'react';
import Header from '../Header';
import { Link, useNavigate } from 'react-router-dom';
import MyContext from '../../MyContext';


const EditStuForm = () => {
    let { currentUser, setEditing, updatestUser } = useContext(MyContext)
   
 
   let  history = useNavigate();

    const [user, setUser] = useState(currentUser);

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name && user.username)
        updatestUser(user);
        history('/stuuser')        
    }
   
    return (
        <div className="container eduser">
        <Header heading =" Edit Student User"/>
        <form>
            <label>Name</label>
            <input className="form-control form-control-md" type="text" value={user.name} name="name" onChange={handleChange} />
            <label>Email</label>
            <input className="form-control form-control-md" type="email" value={user.mail} name="mail" onChange={handleChange} />
            <label>Username</label>
            <input className="form-control form-control-md" type="text" value={user.username} name="username" onChange={handleChange} />     
            <button className="btn btn-primary" type="submit" onClick={handleSubmit} >Update user</button>
                <Link to ="/stuuser">
                    <button className="btn btn-primary" type="submit" onClick={() => setEditing(false)} >Cancel</button>
                </Link>
        </form>
        </div>
    )
}

export default EditStuForm;