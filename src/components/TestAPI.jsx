import {useState} from "react";

function TestAPI() {
  const [users, setUsers] = useState([]);
  function getUsers(){
    const getData=async() => {
      const response= await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const userss= await response.json();
      return userss;
    };
    getData().then((userss) => setUsers(userss));
  }
  return  (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {users.map((user) => (
        <div key={user.id}> {user.name} -- {user.mail}{" "} </div>
      ))}
    </div>
  );
}
export default TestAPI;