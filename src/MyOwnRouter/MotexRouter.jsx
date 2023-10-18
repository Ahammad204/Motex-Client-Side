import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from './../Error/Error';
import HomePage from "../Pages/HomePage/HomePage";
import AppProduct from "../Pages/AddProduct/AppProduct";
import Mycart from "../Pages/Mycart/Mycart";

  
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

        }



      ]
    },
  ]);
  
  export default router;