import { useParams, useSearchParams } from "react-router-dom";
import ItemList from "./Components/ItemList";
import SearchBox from "./SearchBox"
import productos from "./assets/json/productos.json";

const Index = () => {
    const {id} = useParams();
    const [params, setParams] = useSearchParams();
    let query;

    if (params.get("q")) {
        query = params.get("q").toUpperCase();    
    }

    const productosFiltrados = id ? productos.filter(item => item.category == id) : query ? productos.filter(item => item.title.toUpperCase().includes(query)) : productos;

    return (
        <>
            <SearchBox />
            <ItemList items={productosFiltrados} />
        </>
    )
}

export default Index