import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopingCartContext } from "../../Context";

const NavBar = () => {
    const context = useContext(ShopingCartContext);
    const activeStyle = "underline underline-offset-4";
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg" >
                    <NavLink to="/">
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/" onClick={() => context.setSearchByCategory()} className={({isActive})=> isActive ? activeStyle:undefined }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/clothes" onClick={() => context.setSearchByCategory('clothes')} className={({isActive})=> isActive ? activeStyle:undefined }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics" onClick={() => context.setSearchByCategory('electronics')} className={({isActive})=> isActive ? activeStyle:undefined }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/furnitures" onClick={() => context.setSearchByCategory('furnitures')} className={({isActive})=> isActive ? activeStyle:undefined }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/toys" onClick={() => context.setSearchByCategory('toys')} className={({isActive})=> isActive ? activeStyle:undefined }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/others" onClick={() => context.setSearchByCategory('others')} className={({isActive})=> isActive ? activeStyle:undefined }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    benwhitespider7me@mail.com
                </li>
                <li>
                    <NavLink to="/my-orders">
                        MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/my-account">
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/electronics">
                        Sign In
                    </NavLink>
                </li>
                <li className="flex items-center">
                        <ShoppingBagIcon className="w-6 h-6 text-black"/>
                        <div>
                            {context.cartProducts.length}
                        </div> 
                </li>
            </ul>
        </nav>
    )
}

export default NavBar