import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from './../Error/Error';
import HomePage from "../Pages/HomePage/HomePage";
import AppProduct from "../Pages/AddProduct/AppProduct";
import Mycart from "../Pages/Mycart/Mycart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./MotexPrivate";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <Error></Error>,
      children:[

        {

          path:"/",
          element:<HomePage></HomePage>


        },{

          path:"/addProduct",
          element:<PrivateRoute><AppProduct></AppProduct></PrivateRoute>

        },{

          path:"/cart",
          element:<PrivateRoute><Mycart></Mycart></PrivateRoute>

        },{

          path:"/login",
          element:<Login></Login>

        },{

          path:"/register",
          element:<Register></Register>

        }



      ]
    },
  ]);
  
  export default router;