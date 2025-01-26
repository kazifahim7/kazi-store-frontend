import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from './MainLayout/Mainlayout';
import Home from './Page/Home';
import NotFound from './GlobalPage/Error';
import About from './Page/About';
import Contact from './Page/Contact';
import AllProduct from './Page/AllProduct';
import SignIn from './Page/SignIn';
import SignUpSection from './Page/Register';
import MainDashBoard from './DashBoard/MainDashBoard';
import MangeUser from './DashBoard/AdminPage/MangeUser';
import CreateProduct from './DashBoard/AdminPage/CreateProduct';
import AllProductAdmin from './DashBoard/AdminPage/AllProduct';
import ProductDetail from './GlobalPage/DetailsPage';
import PaymentSuccess from './GlobalPage/Success';
import PaymentFailure from './GlobalPage/Fail';
import AllOrders from './DashBoard/AdminPage/Allorders';
import Cart from './Page/Cart';
import { Provider } from 'react-redux';
import { persistor, store } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Toaster } from 'sonner';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound></NotFound>,
    element: <Mainlayout></Mainlayout>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "/details",
        element: <ProductDetail></ProductDetail>
      },
      {
        path: "/success",
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: "/fail",
        element: <PaymentFailure></PaymentFailure>
      },
      {
        path: "all-product",
        element: <AllProduct></AllProduct>
      },
      {
        path: "cart",
        element: <Cart></Cart>
      },
    ]
  },
  {
    path: "/login",
    element: <SignIn></SignIn>
  },
  {
    path: "/register",
    element: <SignUpSection></SignUpSection>
  },
  {
    path: "/dashBoard",
    errorElement: <NotFound></NotFound>,
    element: <MainDashBoard></MainDashBoard>,
    children: [
      {
       path:"manageUser",
       element:<MangeUser></MangeUser>
      },
      {
        path:"create-product",
       element: <CreateProduct></CreateProduct>
      },
      {
        path:"all-products",
       element: <AllProductAdmin></AllProductAdmin>
      },
      {
        path:"all-orders",
       element: <AllOrders></AllOrders>
      },
    ]
  }


]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>

      <Toaster></Toaster>
    </Provider>
  </StrictMode>,
)
