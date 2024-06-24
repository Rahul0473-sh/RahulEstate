import { useState } from 'react'
import "./layout.scss"
import { Navbar } from './components/Navbar/Navbar.jsx'
import Homepage from './components/routes/Hompage/Homepage.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/routes/Layout/Layout.jsx'
import ListPage from './components/routes/Listpage/ListPage.jsx'
import SinglePage from './components/routes/singlePage/SinglePage.jsx'



function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<Homepage/>
        },
        {
          path: "/list",
          element:<ListPage/>
        },
        {
          path: "/:id",
          element:<SinglePage/>
        },
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App
