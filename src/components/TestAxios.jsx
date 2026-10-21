import axios from "axios";
import {useState} from "react";

function TestAxios(params) {
    const [users, setUsers] = useState([]);
    function getUsers(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            if (response) {
                setUsers(response.data)
            }
        });
    }
    return(
        <div>
            <button onClick={getUsers}>Get Users</button>
            {users.map((user)=>(
                <div key={user.id}> {user.name} -- {user.email} </div>
            ))}
        </div>
    );
export default TestAxios;