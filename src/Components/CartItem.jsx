import { useDispatch } from "react-redux";
import { aumentarCantidad, reducirCantidad } from "../redux/cart/actions_type";

const CartItem = ({item}) => {
    const dispatch = useDispatch();

    const aumentarCantidadItem = (productId, size, color) => {
        const item = {productId:productId, size:size, color:color};        
        dispatch(aumentarCantidad(item))
    }

    const reducirCantidadItem = (productId, size, color) => {
        const item = {productId:productId, size:size, color:color};
        dispatch(reducirCantidad(item))
    }

    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">Talle: {item.size} | Color: {item.color}</h6>
                <p>${item.count * item.price}</p>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-light" onClick={() => {reducirCantidadItem(item.id, item.size, item.color)}}>-</button>
                    <button type="button" className="btn btn-light">{item.count}</button>
                    <button type="button" className="btn btn-light" onClick={() => {aumentarCantidadItem(item.id, item.size, item.color)}}>+</button>
                </div>
            </div>
        </div>
    )
}

export default CartItem