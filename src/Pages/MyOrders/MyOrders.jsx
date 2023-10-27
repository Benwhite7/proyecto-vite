import { useContext } from "react";
import { ShopingCartContext } from "../../Context";
import Layout from "../../Componentes/Layout";
import Orderscard from "../../Componentes/OrdersCard";
import { Link } from "react-router-dom";

function MyOrders () {
    const context = useContext(ShopingCartContext);
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4 ">
                <h1 className="font-medium text-xl">MyOrders</h1>
            </div>
            {context.order.map((order,index)=> (
            <Link key={index} to={`/my-orders/${index}`}>    
                <Orderscard totalPrice={order.totalPrice} totalProducts={order.totalProducts}/>
            </Link>
            ))}
        </Layout>
    )
}

export default MyOrders