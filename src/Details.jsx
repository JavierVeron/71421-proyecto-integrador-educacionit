import AddToCartButton from "./Botones/AddToCartButton"
import BackButton from "./Botones/BackButton"
import ItemDetails from "./Components/ItemDetails"
import productos from "./assets/json/productos.json";
import { useParams } from "react-router-dom";

const Details = () => {
    const {id} = useParams();
    const producto = productos.find(item => item.id == id);

    return (
        <div className="my-5 text-center">
            <BackButton />
            <ItemDetails item={producto} />
            <AddToCartButton />
        </div>
    )
}

export default Details