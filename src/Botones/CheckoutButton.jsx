import { Link } from "react-router-dom"

const CheckoutButton = () => {
    return (
        <div className="my-3 text-center">
            <Link to={"/checkout"} className="btn btn-light">
                Checkout
            </Link>
        </div>
    )
}

export default CheckoutButton