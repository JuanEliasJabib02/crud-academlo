import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UsersForm = ({getUsers, userSelected, cancel, }) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [birthday,setBirthday] = useState("");

    

    /* Para colocar la informacion del usuario seleccionado
    en los inputs cada ver que cambie el usuario seleccionado */
    useEffect(() => {
       if (userSelected !== null) {
        console.log(userSelected)
        setFirstName(userSelected.first_name)
        setlastName(userSelected.last_name)
        setEmail(userSelected.email)
        setPassword(userSelected.password)
        setBirthday(userSelected.birthday)
        
       } else {
        setFirstName("")
        setlastName("")
        setEmail("")
        setPassword("")
        setBirthday("")

       }
    }, [userSelected]);
                /* Para que cambie cada vez que cambia el usuario seleccionado */

    
        /* Funcion para vaciar los inputs */

       
                

    const submit = (e) => {
        e.preventDefault();
        const user ={
            /* Estos nombres de este arreglo
            tienen que conindicir con los de la api */
            first_name:firstName,
            last_name:lastName,
            email:email,
            password:password,
            birthday:birthday
            
        }

        

        
        if (userSelected !== null) {
            alert("edit")
            axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, user)
	        .then(() => {
                getUsers()
                cancel();
              
            }) 
        } else {
            alert("Add")
            axios.post('https://users-crud1.herokuapp.com/users/', user)
	        .then(() => {
                getUsers()
                cancel();
            })
	        .catch(error => console.log(error));
        }

       
        
    }

    return (
        <form className='form'>

            <h2>NEW USER</h2>

            <div className='names'>

            <div>
                <label htmlFor="firstName"><i class="fa-solid fa-user"></i></label>
                <input 
                     id="firstName"
                    type="text"
                    placeholder='type your first name'
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                />
            </div>

            <div>
                <label htmlFor="lastName"></label>
                <input
                    id="lastName"
                    type="text"
                    placeholder='type your last name'
                    onChange={e => setlastName(e.target.value)}
                    value={lastName}
                />
            </div>
            </div>
            <div>
                <label htmlFor="email"><i class="fa-solid fa-envelope"></i></label>
                <input
                    id="email" 
                    type="email"
                    placeholder='type your email'
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
            </div>
            <div>
                <label htmlFor="password"><i class="fa-solid fa-key"></i></label>
                <input 
                    id="password"
                    placeholder='type a password'
                    type='password'
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    
                />
            </div>
            <div>
                <label htmlFor="birthday"><i class="fa-solid fa-cake-candles"></i></label>
                <input 
                    id="birthday"
                    type="date"
                    onChange={e => setBirthday(e.target.value)}
                    value={birthday}
                    
                />
            </div>  

            <button onClick={submit}>SUBMIT</button>
            <button onClick={() => cancel()}>CANCEL</button>
        </form>
    );
};

export default UsersForm;