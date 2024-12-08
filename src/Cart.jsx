import CheckoutButton from "./Botones/CheckoutButton"
import ContinueButton from "./Botones/ContinueButton"
import CartList from "./Components/CartList"

const Cart = () => {
    return (
        <>
            <CartList />
            <ContinueButton />
            <CheckoutButton />
        </>
    )
}

export default Cart