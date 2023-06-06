import React, { useState } from "react";
import StudentuserList from "./Studata.js";
import MentoruserList from "./MentData.js";
import StudentUser from "./Components/tables/StudentUser.js"
import MentorUser from "./Components/tables/MentorUser.js";
import AddStuForm from "./Components/forms/AddStuForm.js";
import AddMenForm from "./Components/forms/AddMenForm.js"
import EditStuForm from "./Components/forms/EditStuForm.js";
import EditMenForm from "./Components/forms/EditMenForm.js";
import { Route, Routes} from "react-router-dom";
import "./App.css"
import Home from "./Components/Home.js";
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  const [users, setUsers] = useState(StudentuserList);
  const [userm, setUserm] = useState(MentoruserList);

  const addstUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const addmrUser = (user) => {
    user.id = userm.length + 1;
    setUserm([...userm, user]);
  };

  const deletestUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const deletemeUser = (id) => {
    setUserm(userm.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", username: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updatestUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };
  const updatemUser = (newUser) => {
    setUserm(
      userm.map((user) => (user.id === currentUser.id ? newUser : user))
    );
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <Routes>

      <Route exact path="/" element={<Home/>}/>
      <Route  exact path="/stuuser" element={
          <StudentUser
            users={users}
            deleteUser={deletestUser}
            editUser={editUser}
          />}/>
      <Route  exact path="/menuser" element={
          <MentorUser
            users={userm}
            deleteUser={deletemeUser}
            editUser={editUser}
          />}/>
    <Route exact path="/editstu" element={
      <EditStuForm
        editing ={editing}
        currentUser={currentUser}
        setEditing={setEditing}
        updateUser={updatestUser}/>
      }/>
    <Route exact path="/editmen" element={
      <EditMenForm
        editing ={editing}
        currentUser={currentUser}
        setEditing={setEditing}
        updateUser={updatemUser}/>
      }/>  

    <Route exact path="/addstu" element={
    <AddStuForm addUser={addstUser} 
    /> }/>
    <Route exact path="/addMen" element={
    <AddMenForm addUser={addmrUser} 
    /> }/>
    </Routes>
  );
};

export default App;