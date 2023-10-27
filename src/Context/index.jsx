import { createContext, useEffect, useState } from "react";

export const ShopingCartContext = createContext()

export const ShopingCartProvider = ({children}) => {

    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);

    const [searchByTitle, setSearchByTitle] = useState(null);
    const [searchByCategory, setSearchByCategory] = useState(null);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    },[])

    const filteredItemByTitle = (items,searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    const filteredItemByCategory = (items,searchByCategory) => {
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    
    const filterBy = (searchType, items, searchByTitle, searchByCategory ) => {
        if (searchType === 'BY_TITLE') {
            return filteredItemByTitle(items, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY'){
            return filteredItemByCategory(items, searchByCategory)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY'){
            return filteredItemByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType) {
            return items;
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
        if ( !searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory ))
    },[items, searchByTitle, searchByCategory])


    const [count, setCount] = useState(0);

    const [proDeOp , setProDeOp] = useState(false);
    const openProductDetail= () => setProDeOp(true);
    const closeProductDetail= () => setProDeOp(false);

    const [checkPo , setCheckPo] = useState(false);
    const openCheckOut= () => setCheckPo(true);
    const closeCheckOut= () => setCheckPo(false);

    const [productShow, setProductShow] = useState({});
    const [cartProducts, setCartProducts] = useState([]);

    const [order , setOrder] = useState([]);

    return (
        <ShopingCartContext.Provider value={{ 
            items,
            setItems,
            count ,
            setCount,
            proDeOp,
            openProductDetail,
            closeProductDetail,
            productShow,
            setProductShow,
            cartProducts,
            setCartProducts,
            checkPo,
            setCheckPo,
            openCheckOut,
            closeCheckOut,
            order,
            setOrder,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </ShopingCartContext.Provider>
    )
}
