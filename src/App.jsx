

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import SignUp from './registration/SignUp';
import SignIn from './registration/SignIn';
import Dashboard from './Dashboard/Dashboard';
import AddProduct from './Dashboard/AddProduct';
import AdminProduct from './Dashboard/AdminProduct';
import Product from './components/Product/Product';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import AdminProductDetails from './Dashboard/AdminProductDetails';
import Home from './components/Home/Home';
import Category from './components/Home/Category';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
        path:"/",
        loader: () => {
          return fetch("category.json");
        },
        element: <Category></Category>
        },
        {
          path: "/signUp",
          element: <SignUp/>,
        },
        {
          path: "/login",
          element: <SignIn/>
        },
        {
          path: "/product",
          element: <Product/>
        },
        {
          path: "/cart",
          element: <PrivetRoute><Cart/></PrivetRoute>
        },
        {
          path: "/product/:id",
          loader: ({ params }) =>
            fetch(
              `http://localhost:5000/product/${params.id}`
            ),
          element: <PrivetRoute><ProductDetails/></PrivetRoute>
        }
      ]
    },
    {
      path:"/dashboard",
      element: <PrivetRoute><Dashboard/></PrivetRoute> ,
      children:[
        {
          path:"/dashboard",
          element: <AddProduct/>
        },
        {
          path:"/dashboard/addProduct",
          element: <AddProduct/>
        },
        {
          path:"/dashboard/adminProduct",
          element: <AdminProduct/>
        },
       
        {
          path:"/dashboard/adminProduct/:id",
          loader: ({ params }) =>
            fetch(
              `http://localhost:5000/dashboard/adminProduct/${params.id}`
            ),
          element: <AdminProductDetails/>
        }
      ]
    }
    
  ]);
  return (
    <div className="max-w-[1440px] mx-auto" >
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
