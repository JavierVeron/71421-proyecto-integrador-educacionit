import { useState } from "react"
import { useNavigate } from "react-router-dom"

const buscar = (texto) => {
    const navigate = useNavigate;
    console.log(texto);
    
    navigate("/?query=" + texto, {replace:true});
}

const SearchBox = () => {
    const [texto, SetTexto] = useState("");

    return (
        <div className="my-1 text-center">
            <div className="input-group mb-3">
                <span className="input-group-text" onClick={buscar(texto)}>🔍</span>
                <input type="text" className="form-control" placeholder="Buscar..." onInput={(e) => {SetTexto(e.target.value)}} value={texto} />
            </div>
        </div>
    )
}

export default SearchBox