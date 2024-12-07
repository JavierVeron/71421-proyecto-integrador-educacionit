import { Link } from "react-router-dom"

const Item = ({item}) => {
    return (
        <div className="col-md-4 mb-3">
            <Link to={"/details/" + item.id} className="text-decoration-none">
                <div className="card text-center text-secondary border-0">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body">
                        <p className="card-text">{item.title}</p>
                        <p className="card-text">${item.price}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Item