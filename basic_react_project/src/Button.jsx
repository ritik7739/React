function printHello(event){
    console.log("Hello!");
    console.log(event);
}
function printBye(){
    console.log("Bye!");
}


export default function Button(){
    return(
        <div>
            <button onClick={printHello}>click me!</button>
            <p onClick={printBye}>This parah is for event demo !</p>
        </div>
    );
}