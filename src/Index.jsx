import { useParams, useSearchParams } from "react-router-dom";
import ItemList from "./Components/ItemList";
import SearchBox from "./SearchBox"
import { useContext } from "react";
import { ProductContext } from "./data/context/ProductContext";

const Index = () => {
    const {products} = useContext(ProductContext);
    const {id} = useParams();
    const [params, setParams] = useSearchParams();
    let query;

    if (params.get("q")) {
        query = params.get("q").toUpperCase();
    }

    const productosFiltrados = id ? products.filter(item => item.category == id) : query ? products.filter(item => item.title.toUpperCase().includes(query)) : products;

    return (
        <>
            <SearchBox />
            <ItemList items={productosFiltrados} />
        </>
    )
}

export default Index