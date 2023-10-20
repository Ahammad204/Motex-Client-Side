import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Error from './../Error/Error';
import HomePage from "../Pages/HomePage/HomePage";
import AppProduct from "../Pages/AddProduct/AppProduct";
import Mycart from "../Pages/Mycart/Mycart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./MotexPrivate";
import AddBrands from "../Pages/AddBrands/AddBrands";
import Products from "../Pages/Products/Products";
import Slider from "../Components/BrandsSlide/Slider";
import UpdateCar from "../Pages/UpdateCar/UpdateCar";
import CarDetails from "../Pages/CarDetails/carDetails";




  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <Error></Error>,
      children:[

        {

          path:"/",
          element:<HomePage></HomePage>,
          loader: ()=> fetch('http://localhost:5000/brand')


        },{

          path:"/addProduct",
          element:<PrivateRoute><AppProduct></AppProduct></PrivateRoute>

        },{

          path:"/cart",
          element:<PrivateRoute><Mycart></Mycart></PrivateRoute>

        },
        {

          path:"/login",
          element:<Login></Login>

        },{

          path:"/register",
          element:<Register></Register>

        },{

          path:"/brand",
          element:<PrivateRoute><AddBrands></AddBrands></PrivateRoute>,
        

        },{

          path:'/products/:name',
          element:<PrivateRoute><Products></Products></PrivateRoute>

        },{

          path:"/slide",
          element:<PrivateRoute><Slider></Slider></PrivateRoute>

        },{

          path:'/update/:id',
          element:<PrivateRoute><UpdateCar></UpdateCar></PrivateRoute>,

        },{

          path:'/details/:id',
          element:<PrivateRoute><CarDetails></CarDetails></PrivateRoute>,

        }



      ]
    },
  ]);
  
  export default router;