function VegItems(){
    const items = [
        {title:"cabbage",category:'veg',id:10},
        {title:"Tamato",category:'veg',id:11},
        {title:"potato",category:'veg',id:13}
    ]

   const veg = items.filter(item=>(item.category=='veg'))
                    .map(item=>(<li key={item.id}>{item.title}</li>))

    const nonVeg = items.filter(item=>item.category=='non-veg')
                        .map(item=>(<li key={item.id}>{item.title}</li>))

    return(
        <>
        <h1>only veg items...</h1>
        <ol>{veg.length>0?veg:"no veg items present"}</ol>
        <h2>non veg items..</h2>
        <ul>{nonVeg.length>0?nonVeg:"no nonveg items present"}</ul>
        </>
    )
}
export default VegItems;