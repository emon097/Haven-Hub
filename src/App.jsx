

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
          element: <Cart/>
        },
        {
          path: "/product/:id",
          loader: ({ params }) =>
            fetch(
              `http://localhost:5000/product/${params.id}`
            ),
          element: <ProductDetails/>
        }
      ]
    },
    {
      path:"/dashboard",
      element: <Dashboard/>,
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
