import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Create a root and render the App component in it using createRoot method from react-dom/client module 
// and render method from the root object.
// The createRoot method takes the root element as an argument and returns a root object.
// The render method of the root object takes the App component as an argument and renders it in the root elemehttps://www.linkedin.com/in/realsahilsaini/nt.
// The StrictMode component is used to enable strict mode for the App component and its children.
// The App component is imported from the App.jsx file.

createRoot(document.getElementById('root')).render(
    
      <App />
)
