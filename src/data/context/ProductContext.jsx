import { createContext, useEffect } from "react"
import { DataSource } from "../index"
import { useState } from "react";

export const ProductContext = createContext([]);

const ProductContextProvider = ({children}) => {
    const [products, setProducts] = useState(DataSource);

    return <ProductContext.Provider value={{products}}>
        {children}
    </ProductContext.Provider>
}

export default ProductContextProvider