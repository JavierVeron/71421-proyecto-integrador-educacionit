import { useState } from "react"
import { useNavigate } from "react-router-dom"

const SearchBox = () => {
    const [texto, setTexto] = useState("");
    const navigate = useNavigate();
    
    const buscar = () => {
        navigate("/?q=" + texto, {replace:true});
    }

    return (
        <div className="my-1 text-center">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Buscar..." onInput={(e) => {setTexto(e.target.value)}} value={texto} />
                <span className="input-group-text" onClick={buscar} title="Buscar">🔍</span>
            </div>
        </div>
    )
}

export default SearchBox