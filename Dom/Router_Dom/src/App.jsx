
import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

import { Route,
         RouterProvider, 
         createBrowserRouter, 
         createRoutesFromElements }
         from 'react-router-dom';

import Root from './component/layouts/Root';


const App = () => {
  
  const router = createBrowserRouter(
      createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
      </Route>
      )
  );
    
  return <RouterProvider router={router} />;
    
};

export default App;
 