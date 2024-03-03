import React from 'react';
import ReactDOM from 'react-dom/client';

// Required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import css framework and files
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// import pages the router will use to conditionally show the appropriate views
import App from './App.jsx';
import Error from './pages/Error.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true, // set the home page
        element: <AboutMe />,
      },
      // create paths for all other pages
      {
        path: '/portfolio',
        element: <Portfolio />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
