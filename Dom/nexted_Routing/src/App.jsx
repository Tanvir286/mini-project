
import { Route,
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements }
  from 'react-router-dom';

import Registration from './pages/Registration';
import Login from './pages/Login';
import Home from './pages/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './pages/ForgotPassword';
import Message from './pages/Message';
import Setting from './pages/Setting';

const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path="/" element={<Registration/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
        <Route path="/home" element={<Home/>}>
           <Route path="message" element={<Message/>}></Route>
           <Route path="setting" element={<Setting/>}></Route>
        </Route>
       
     </Route>)
    
);  
  
return (
     <>
     <ToastContainer />
     <RouterProvider router={router} />;
     </>
)
  
};

export default App;