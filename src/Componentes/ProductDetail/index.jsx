import { useContext } from "react";
import { ShopingCartContext } from "../../Context";
import {XMarkIcon} from "@heroicons/react/24/solid";
import "./styles.css";

const ProductDetail = () => {
    const context = useContext(ShopingCartContext);
    console.log('PRODUCT:' , context.productShow)
    return (
        <aside className={`${context.proDeOp ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <div onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className='h-6 w-6 text-black cursor-pointer'/>
                </div>
            </div>
            <figure className="px-6">
                <img className="w-full h-full rounded-lg" src={context.productShow.images} alt="" />
            </figure>
            <p className="flex flex-col p-6">
                <span className='font-medium text-2xl'>{context.productShow.price}</span>
                <span className='font-medium text-md'>{context.productShow.title}</span>
                <span className='font-light text-sm'>{context.productShow.description}</span>
            </p>
        </aside>
    )
}

export default ProductDetail;