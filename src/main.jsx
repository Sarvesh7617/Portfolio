import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import Themeprovider from './components/ThemeProvider.jsx';


const Router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Themeprovider>
      <RouterProvider router={Router}/>
    </Themeprovider>
  </StrictMode>,
)