import { Link } from "react-router-dom"

const AddToCartButton = () => {
    return (
        <div className="my-3 text-center">
            <Link to={"/"} className="btn btn-light">
                Agregar al Carrito
            </Link>
        </div>
    )
}

export default AddToCartButton