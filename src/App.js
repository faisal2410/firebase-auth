import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Orders from './components/Orders';
import Register from './components/Register';
// import RegisterReactBootstrap from './components/RegisterReactBootstrap';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Main from './layout/Main';
import PrivateRoute from "./routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'/signin',
        element:<Signin></Signin>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      // {
      //   path: '/register',
      //   element: <RegisterReactBootstrap></RegisterReactBootstrap>
      // },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      },
     
    ]
  }
])

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

// import { useState } from 'react';
// import './App.css';
// import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import app from './firebase/firebase.init';


// const auth=getAuth(app)

// function App() {
//   const [user, setUser] = useState({})
 

//   const googleProvider=new GoogleAuthProvider();
//   const githubProvider = new GithubAuthProvider();
// const handleGoogleSignIn=()=>{
//   signInWithPopup(auth, googleProvider)
//   .then(result => {
//     const user = result.user;
//     setUser(user);
//     console.log(user);
//   })
//   .catch(error => {
//     console.error('error: ', error);
//   })
// }

// const handleSignOut = () => {
//   signOut(auth)
//     .then(() => {
//       setUser({});
//       console.log("Signout success")
//     })
//     .catch(() => {
//       setUser({})
//     })
// }

// const handleGithubSignIn= () =>{
//   signInWithPopup(auth, githubProvider)
//   .then( result => {
//     const user = result.user;
//     setUser(user);
//     console.log(user);
//   })
//   .catch( error =>{
//     console.error ('error: ', error)
//   })
// }

//   return (
//     <div className="App">
//     {/* condition ? true: false */}

//     {
//       user.uid ?
//         <button onClick={handleSignOut}>Sign Out</button>
//         :
//      <>
//      <button onClick={handleGoogleSignIn}>Google Sign In</button>
//      <button onClick={handleGithubSignIn}>Github Sign IN</button>
//      </>

//     }
//     {user.uid && <div>
//       <h3>User name: {user.displayName}</h3>
//       <p>Email address: {user.email}</p>
//       <img src={user.photoURL} alt="" />
//     </div>}
//   </div>
//   );
// }

// export default App;
