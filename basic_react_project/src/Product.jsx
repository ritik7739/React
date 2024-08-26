import "./Product.css"
<Product className="css"></Product>
function Product({title,price}){
    return(
        <div className="Product">
        <h1>{title}</h1>
        <h5>{price}</h5>
        </div>
    )
}

export default Product;