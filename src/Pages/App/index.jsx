import { BrowserRouter, useRoutes } from 'react-router-dom';
import { ShopingCartProvider } from '../../Context';
import './App.css';
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders/MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import NavBar from "../../Componentes/NavBar";
import Carrito from '../../Componentes/Carrito';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home/>},
    { path: "/clothes", element: <Home/>},
    { path: "/electronics", element: <Home/>},
    { path: "/furnitures", element: <Home/>},
    { path: "/toys", element: <Home/>},
    { path: "/others", element: <Home/>},
    { path: "/my-orders", element: <MyOrders/>},
    { path: "/my-order", element: <MyOrder/>},
    { path: "/my-orders/last", element: <MyOrder/>},
    { path: "/my-orders/:id", element: <MyOrder/>},
    { path: "/my-account", element: <MyAccount/>},
    { path: "/sign-in", element: <SignIn/>},
    { path: "/*", element: <NotFound/>},
  ])
  return routes;
}

function App() {
  return (
    <ShopingCartProvider>
      <BrowserRouter>
        <AppRoutes/>
        <NavBar/>
        <Carrito/>
      </BrowserRouter>
    </ShopingCartProvider>
  )
}

export default App
