import { useDispatch } from "react-redux";
import { agregarItem } from "../redux/cart/actions_type";

const AddToCartButton = ({productId, size, color}) => {
    const dispatch = useDispatch();
    
    const addToCart = () => {
        const item = {productId:productId, size:size, color:color};
        dispatch(agregarItem(item))
    }

    return (
        <div className="my-3 text-center">
            <button to={"/"} className="btn btn-light" onClick={addToCart}>
                Agregar al Carrito
            </button>
        </div>
    )
}

export default AddToCartButton