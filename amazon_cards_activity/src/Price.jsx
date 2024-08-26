export default function Price({oldPrice,newPrice}){

     let oldstyles={
          textDecorationLine:"line-through",
     };
     let newstyles={
        fontWeight:"bold",
     };
     let styles={
        backgroundColor:"rgb(231 185 36)",
        height:"32px",
        width:"200px",
        borderBottomLeftRadius:"20px",
        borderBottomRightRadius:"20px",
     }
    return(
        <div style={styles}>
            <span style={oldstyles}> {oldPrice}</span>     {/* Span -------> is used for printing in the same line*/}
            &nbsp; &nbsp; &nbsp;          {/* nbsp (stands for non breaking space)-------> is used 
                                                        when we required space*/}

            <span style={newstyles}> {newPrice}</span>      {/* Span -------> is used for printing in the same line*/}
        </div>
    )
}