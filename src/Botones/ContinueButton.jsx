import { Link } from "react-router-dom"

const ContinueButton = () => {
    return (
        <div className="my-3 text-center">
            <Link to={"/"} className="btn btn-light">
                Seguir Comprando
            </Link>
        </div>
    )
}

export default ContinueButton