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
import UpdateProduct from './DashBoard/AdminPage/UpdateProduct';
import PaymentHistory from './DashBoard/user/PaymentHistory';
import UpdateProfile from './DashBoard/user/ManageProfile';
import Protected from './privateRoutes/Protected';
import AdminRoutes from './privateRoutes/AdminRoutes';
import UserRoutes from './privateRoutes/UserRoutes';


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
        path: "details/:id",
        element: <Protected><ProductDetail></ProductDetail></Protected>
      },
      {
        path: "success",
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path: "fail",
        element: <PaymentFailure></PaymentFailure>
      },
      {
        path: "all-product",
        element: <AllProduct></AllProduct>
      },
      {
        path: "cart",
        element: <Protected><Cart></Cart></Protected>
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
    element: <Protected><MainDashBoard></MainDashBoard></Protected>,
    children: [
      {
       path:"manageUser",
        element: <AdminRoutes><MangeUser></MangeUser></AdminRoutes>
      },
      {
        path:"create-product",
        element: <AdminRoutes><CreateProduct></CreateProduct></AdminRoutes>
      },
      {
        path:"all-products",
        element: <AdminRoutes> <AllProductAdmin></AllProductAdmin></AdminRoutes>
      },
      {
        path:"all-orders",
        element: <AdminRoutes><AllOrders></AllOrders></AdminRoutes>
      },
      {
        path:"updateProduct/:id",
        element: <AdminRoutes><UpdateProduct></UpdateProduct></AdminRoutes>
      },
      {
        path:"payment-history",
        element: <UserRoutes><PaymentHistory></PaymentHistory></UserRoutes>
      },
      {
        path:"manage-profile",
        element: <UserRoutes><UpdateProfile></UpdateProfile></UserRoutes>
      }
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
