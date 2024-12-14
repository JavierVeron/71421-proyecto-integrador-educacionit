import { useRef, useState } from "react"
import AddToCartButton from "../Botones/AddToCartButton";

const ItemDetails = ({item}) => {
    const [colorSelected, setColorSelected] = useState("");
    const [sizeSelected, setSizeSelected] = useState("");
    const colores = useRef();
    const talles = useRef();

    const SelectColor = (e) => {
        for (const element of colores.current.childNodes) {
            element.classList.remove("active");
        }
        
        setColorSelected(e.target.innerHTML);
        e.target.classList.add("active");        
    }

    const SelectSize = (e) => {
        for (const element of talles.current.childNodes) {
            element.classList.remove("active");
        }

        setSizeSelected(e.target.innerHTML);
        e.target.classList.add("active");
    }    

    return (
        <>
            <img src={item.image} alt={item.title} className="img-fluid" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <p>Colores:</p>
            <div className="btn-group mb-3" role="group" ref={colores}>
                {
                    item.colors.map(color => (
                        <button key={color} type="button" className="btn btn-light" onClick={(e) => {SelectColor(e)}}>{color}</button>
                    ))
                }
            </div>
            <p>Talles:</p>
            <div className="btn-group mb-3" role="group" ref={talles}>
                {
                    item.sizes.map(size => (
                        <button key={size} type="button" className="btn btn-light" onClick={(e) => {SelectSize(e)}}>{size}</button>
                    ))
                }
            </div>
            <p>Precio: <b>${item.price}</b></p>
            <AddToCartButton productId={item.id} size={sizeSelected} color={colorSelected} />
        </>
    )
}

export default ItemDetails