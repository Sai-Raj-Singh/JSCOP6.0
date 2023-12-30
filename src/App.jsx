import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
// import Part from './Part/Part'
import Navbar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import HomePage from './Components/HomePage/HomePage'
import About from './Components/About/About'
import Speaker from './Components/Speakers/Speaker'
import Timeline from './Components/TimeLine/Timeline'
import Reachus from './Components/Reachus/Reachus'
import OurTeam from './Components/Team/OurTeam'
import Events from './Components/Event/Events'
import Layout from './Components/Layout'
import Details from './Components/Event/Details'
import { AnimatePresence } from 'framer-motion'

function App() {

  const router = createBrowserRouter([
   
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"",
          element:<HomePage/>
        },

        {
          path:"/contact",
          element:<Reachus/>
        },
        {
          path:"/About",
          element:<About/>
        },
        {
          path:"/Speaker",
          element:<Speaker/>
        },
        {
          path:"/Team",
          element:<OurTeam/>
        },
        {
          path:"/Events",
          element:<Events/>
        },
        {
          path:"/Details",
          element:<Details />
        },
        {
          path:"/Timeline",
          element:<Timeline/>
        },
        
      ]
    },
    
  ])


  return (
   <>

<AnimatePresence mode="wait">
<RouterProvider router={router}/>
</AnimatePresence>

   

 
   </>
  )
}

export default App



