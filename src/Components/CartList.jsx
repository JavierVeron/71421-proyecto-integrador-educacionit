import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { ProductContext } from "../data/context/ProductContext";
import CartItem from "./CartItem";


const CartList = () => {
    const {products} = useContext(ProductContext);
    const items = useSelector(state => state);
    const [listItems, setListItems] = useState([]);

    useEffect(() => {
        items && setListItems(items.cart.map(item => {
            let product = products.find(product => product.id == item.productId);
            return {id:item.productId, title:product.title, size:item.size, color:item.color, price:product.price, count:item.count}
        }));
    }, [items])

    if (listItems.length == 0) {
        return (
            <div className="my-5 text-center">
                <h3>Error! No se encontraron Productos en el Carrito!</h3>
            </div>
        )
    }
    
    return (
        <div className="my-3 text-center">
            {
                listItems.map(item => (
                    <CartItem key={item.id+item.size+item.color} item={item} />
                ))
            }
        </div>
    )
}

export default CartList