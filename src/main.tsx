import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import User from "./layout/User.tsx";
import Child from "./layout/Child.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[{
      path: "child/:childID",
      element: <Child />
    }]
  },
  {
    path:'user',
    element:<User/>
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router={router} />
)
