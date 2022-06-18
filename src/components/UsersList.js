import React from 'react';
import axios from 'axios';
   /*         LOGICA USER-LIST
                            1- Creo una lista  y ultilizo .map para iterar en el array
                            de users que viene por props desde el componente padre y mostrar la info
       
 */
            

const UsersList = ({users, select, getUsers}) => {

    const remove = (id) => {
        axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
            .then(() => getUsers())
            .catch(error => console.log(error));
    }
  
    return (

        
        <ul className='user-list'>
            <h2><i class="fa-solid fa-users"></i> USERS</h2>
            {
               users?.map(user => (
                    <li className='list' key={user.id}>
                       <h3> Nombre: {user.first_name} {user.last_name}</h3>
                       <p><b>Email:</b> {user.email}</p>
                       <p><b>Password:</b> {user.password}</p>
                       <p><b>Birthday:</b> {user.birthday}</p>

                       <button onClick={() => select(user)}>EDIT</button>
                       <button onClick={() => remove(user.id)}>DELETE</button>
                    </li>


                )) 
            }
        </ul>
    );
};

export default UsersList;