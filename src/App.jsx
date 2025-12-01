import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import RouterError from './components/RouterError'
import Test1 from './components/Test1'

function App() {
  //create browser router and configure rouyting
  const browserRouter=createBrowserRouter([
   {
    path:"/",
    element:<RootLayout />,
    errorElement:<RouterError />,
    children:[
      {
        path:"",
        element:<Home />
      },
      {
        path:"register",
        element:<Register />
      },
      {
        path:"login",
        element:<Login   />
      },
      {
        path:"test1",
        element:<Test1 />
      }
    ]
   }
  ])


  return (
    <RouterProvider router={browserRouter} />
  )
}

export default App