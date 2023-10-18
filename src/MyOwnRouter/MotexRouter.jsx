import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from './../Error/Error';
import HomePage from "../Pages/HomePage/HomePage";
import AppProduct from "../Pages/AddProduct/AppProduct";
import Mycart from "../Pages/Mycart/Mycart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

  
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
          element:<AppProduct></AppProduct>

        },{

          path:"/cart",
          element:<Mycart></Mycart>

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