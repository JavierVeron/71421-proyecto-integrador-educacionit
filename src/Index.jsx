import { useParams, useSearchParams } from "react-router-dom";
import ItemList from "./Components/ItemList";
import SearchBox from "./SearchBox"
import productos from "./assets/json/productos.json";

const Index = () => {
    const {id} = useParams();
    const [params, setParams] = useSearchParams();
    console.log(params.get("q"));
    const productosFiltrados = id ? productos.filter(item => item.category == id) : productos;

    return (
        <>
            <SearchBox />
            <ItemList items={productosFiltrados} />
        </>
    )
}

export default Index