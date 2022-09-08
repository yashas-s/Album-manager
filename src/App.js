import { useEffect, useState } from "react";
import AddUser from "./AddUser";
import User from "./User";
import './User.css'
import Grid from '@mui/material/Grid';


function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchDAta()

  }, [])
  //To Fetch the DATA
  const fetchDAta = async () => {
    await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err)
      })
  }

  // Code to Add the data
  const onAdd = async (name) => {
    console.log(name)
    await fetch(`https://jsonplaceholder.typicode.com/albums`, {
      method: 'POST',
      body: JSON.stringify({
        title: name,

      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);

      })
      .catch((err) => {
        console.log(err)
      })
  }
  // Code to Delete the data
  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 200) {
          return;
        } else {
          setUsers(
            
            users.filter((user) => {
              
              return user.id !== id;
            })
          );
        }
      })
      .catch((err) => {
        
        console.log(err);
      });
  };

  


  return (
    //Using grid from material-ui to make the content looks good
    //Called Adduser file too
   
      <div className="album-top">
        <h1>Album Manager</h1>
        
        <AddUser onAdd={onAdd} />
        <div className="album-below">
          <Grid container spacing={2} >
            {
              users.map((user) => (
                <Grid item xs={8}>
                  <User id={user.id} key={user.id} name={user.title} onDelete={onDelete} />
                </Grid>
              ))
            }
          </Grid>
        </div>
      </div>
    
  );

}

export default App;