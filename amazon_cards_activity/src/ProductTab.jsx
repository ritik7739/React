import Product from "./Product.jsx"
function ProductTab(){
    let styles={
        display: "flex",
        flex: "wrap",
        justifyContent: "center",
        alignItem: "center"

    };
    return(
        <div style={styles}>
        <Product title="Logitech MX Master" idx={0}/>
        <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="Zobronics Zeb-transformer" idx={2}/>
        <Product title="Petronics Toad 23" idx={3}/>
        </div>
    )
}

export default ProductTab;