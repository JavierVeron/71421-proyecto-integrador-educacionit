import { Link } from "react-router-dom"

const CartButton = () => {
    return (
        <div className="my-3 text-center">
            <Link to={"/cart"} className="btn btn-light">
                <i className="bi bi-cart"></i>
            </Link>
        </div>
    )
}

export default CartButton