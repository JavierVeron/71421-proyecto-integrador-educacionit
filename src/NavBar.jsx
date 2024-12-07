import { Link } from "react-router-dom"
import Logo from "./Logo"
import CartButton from "./Botones/CartButton"

const NavBar = () => {
    return (
        <>
            <Logo />
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to={"/"} className="nav-link text-dark">Todos</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/category/remeras-lisas"} className="nav-link text-dark">Remeras Lisas</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/category/remeras-con-estampa"} className="nav-link text-dark">Remeras con Estampa</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/category/jeans"} className="nav-link text-dark">Jeans</Link>
                </li>
            </ul>
            <CartButton />
        </>
    )
}

export default NavBar