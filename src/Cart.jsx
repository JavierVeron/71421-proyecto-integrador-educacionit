import CheckoutButton from "./Botones/CheckoutButton"
import ContinueButton from "./Botones/ContinueButton"

const Cart = () => {
    return (
        <>
            <div className="my-3 text-center">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Remera Over Carl Militar</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">Talle: S | Color: Blanco</h6>
                        <p>$32990</p>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-light">-</button>
                            <button type="button" className="btn btn-light">1</button>
                            <button type="button" className="btn btn-light">+</button>
                        </div>
                    </div>
                </div>
            </div>
            <ContinueButton />
            <CheckoutButton />
        </>
    )
}

export default Cart