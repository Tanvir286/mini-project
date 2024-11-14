// App.js
import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import { MyContextProvider } from './contexts/AMi'; 
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './component/layouts/Root';

const App = () => {
  // Define the router
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );

  return (
    // Wrap the app inside MyContextProvider to provide the context
    <MyContextProvider>
      <RouterProvider router={router} />
    </MyContextProvider>
  );
};

export default App;
