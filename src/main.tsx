import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [{
      path: "child/:childID",
      element: <div>1</div>
    }]
  },
  {
    path: 'user',
    element: <div>2</div>
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RouterProvider router = {router}/>
)
