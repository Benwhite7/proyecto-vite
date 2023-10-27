import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopingCartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Ordercard from "../Ordercard";
import { totalPrice } from "../../utils";
import "./styles.css";

const Carrito = () => {
    const context = useContext(ShopingCartContext);

    const handleDelete = (id) => {
        const filterProducts = context.cartProducts.filter( product => product.id != id )
        context.setCartProducts(filterProducts)
    }
    const handleCheckout = () => {
        const orderToAdd = {
            date : "20.10.23",
            products : context.cartProducts,
            totalProducts : context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }
        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([])
        context.setSearchByTitle(null)
    }

    return (
        <aside className={`${context.checkPo ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div onClick={() => context.closeCheckOut()}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
                </div>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {context.cartProducts.map(product => (
                                <Ordercard key={product.id} id={product.id} title={product.title} imageUrl={product.images} price={product.price} handleDelete={handleDelete}/>
                            ))}
            </div>
            <div className='px-6 mb-6'>
                <p className="flex justify-between items-center mb-2 ">
                    <span className="font-light">Total:</span>
                    <span className="font-medium text-2xl">S/= {totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'> 
                    <button className="w-full bg-black py-3 text-white rounded-lg"  onClick={() => handleCheckout()}>Verificar</button>
                </Link>
                
            </div>
        </aside>
    )
}

export default Carrito;