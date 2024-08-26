import Product from "./Product";
import MsgBox from "./MeesageBox"; 
function ProductTab(){
    return(
        <>
        <MsgBox userName="Ritik" textColor="blue"/>
        <MsgBox userName="Deepak" textColor="pink"/>
        <MsgBox userName="Shardha" textColor="cyan"/>
        <Product title="Phone" price={30000}/>
        <Product title="Laptop" price={40000}/>
        <Product title="Pen" price={10}/>
        </>
    )
}
export default ProductTab;