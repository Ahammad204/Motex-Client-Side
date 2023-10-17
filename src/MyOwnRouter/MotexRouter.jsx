import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from './../Error/Error';
import HomePage from "../Pages/HomePage/HomePage";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <Error></Error>,
      children:[

        {

          path:"/",
          element:<HomePage></HomePage>


        }



      ]
    },
  ]);
  
  export default router;