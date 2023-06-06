import React from "react";
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
import UserProvider from "./UserProvider.js";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  exact path="/stuuser" element={
            <StudentUser
            />}/>
        <Route  exact path="/menuser" element={
            <MentorUser
            />}/>
        <Route exact path="/editstu" element={
            <EditStuForm/>
            }/>
        <Route exact path="/editmen" element={
            <EditMenForm/>
            }/>  
        <Route exact path="/addstu" element={
            <AddStuForm/>
            }/>
        <Route exact path="/addMen" element={
            <AddMenForm/>
            }/>
      </Routes>
    </UserProvider>
  );
};

export default App;