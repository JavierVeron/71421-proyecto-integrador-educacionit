import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div className="my-1 text-center">
            <Link to={"/"}>
                <img src="/images/logo-vcp.avif" alt="VCP" width={160} />
            </Link>
        </div>
    )
}

export default Logo