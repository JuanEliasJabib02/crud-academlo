
                  /*   lOGICA CRUDS DE USUARIOS  */
    /*  
     PASO 1 -> Crear estado donde guardare la info de la api, invocar la api 
     PASO 2. Creo componente UsersList para mostrar a los usuarios
     PASO 3 -> Creo la funcion de seleccionar usuario      
     PASO 4 -> Creo componente UsersForms, estados e inputs controlado
     PASO 5 -> Añado funcion añadir en UsersForm.js y de getUsers en App.js
     PASO 6 -> Le añado la funcion de eliminar en UsersList.js
     PASO 7 -> La añado la funcion de edit en UsersForm.js y deseleccionar
     PASO 8 -> Creo una funcion para vaciar los inputs en UsersForm.js
     PASO 9 -> Creo el clear de los inputs
    */       
 
       
import axios from 'axios';
import { useEffect, useState } from 'react';
import UsersForm from './components/UsersForm';
import UsersList from './components/UsersList';
import './styles.css';

   
function App() {

    /* Variables */

    const [users, setUsers] = useState([]);
    const [userSelected,setUserSelected] = useState(null);

    useEffect(() => {
      axios
        .get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsers(res.data)) 
  }, []);


  console.log(users)
 
  const select = (user) => {
 setUserSelected(user);
  }


  const cancel = () => setUserSelected(null)



    
  
  const getUsers = () => {
      axios
        .get('https://users-crud1.herokuapp.com/users/')
        .then(res => setUsers(res.data)) 
  }

  


  
  


  return (
    <div className="App">
       < UsersForm
            getUsers={getUsers}
            userSelected={userSelected}
            cancel={cancel}
          
         
            />

        < UsersList 
            users ={users}
            select ={select}
            getUsers={getUsers}
            setUserSelected={setUserSelected}
        />

        
    </div>
  );
}

export default App;
