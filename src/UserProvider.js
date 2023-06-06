import React ,{useState} from "react";
import MyContext from "./MyContext";
import StudentuserList from "./Studata.js";
import MentoruserList from "./MentData.js";

const UserProvider = ({children}) =>{
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
    <MyContext.Provider value={{ users, userm ,addstUser,addmrUser,deletestUser,
        deletemeUser,editUser,updatestUser,updatemUser, currentUser, editing,setEditing}}>
            {children}
        </MyContext.Provider>
  );
};
export default UserProvider;