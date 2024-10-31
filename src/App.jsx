import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Sidebar from "./components/Sidebar"
import Body from "./components/Body"
import Inbox from "./components/Inbox"
import Mail from "./components/Mail"
import SendMail from "./components/SendMail"
import { useDispatch, useSelector } from 'react-redux';

// react router 
const myRouter = createBrowserRouter([
  {
    path: "/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Inbox/>
      },
      {
        path:"/mail/:id",
        element: <Mail/>
      }
    ]
  }
])

function App() {
  const dispatch = useDispatch();

  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      <Navbar/>
        <RouterProvider router={myRouter}/>

    </div>
  )
}

export default App
