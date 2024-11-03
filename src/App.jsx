import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Sidebar from "./components/Sidebar"
import Body from "./components/Body"
import Inbox from "./components/Inbox"
import Mail from "./components/Mail"
import { useDispatch, useSelector } from 'react-redux';
import Login from "./components/Login"

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

  // const {user} = useSelector(store => store.app);
  const user = true;
  console.log(user);
  

  const dispatch = useDispatch();

  return (
    <div className="bg-[#F6F8FC] h-screen w-screen overflow-hidden">
      {
        (!user) 
              ?
         (<Login/>) 
              :
         (<>
          <Navbar/>
         <RouterProvider router={myRouter}/>
         </>)
      }

      
        

    </div>
  )
}

export default App
