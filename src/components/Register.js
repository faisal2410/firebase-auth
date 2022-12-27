import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
const Register = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('registered user', user);
            })
            .catch(error => {
                console.error(error)
            })

    }

   
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then( result => {
            const user = result.user;
            console.log("user from register component====>",user);
        })
        .catch(error => console.error(error));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Name</label>
                    <input type="text" name="name" className="form-control" id="exampleInputName" aria-describedby="NameHelp"/>
                        
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                
            </form>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google</button>
        </div>
    );
};

export default Register;