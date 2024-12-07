import { Link } from "react-router-dom"

const BackButton = () => {
    return (
        <div className="my-3 text-center">
            <Link to={"/"} className="btn btn-light">
                Volver
            </Link>
        </div>
    )
}

export default BackButton