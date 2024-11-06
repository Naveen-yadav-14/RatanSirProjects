function AllItems(){
    const items = [
        {title:"cabbage",category:'veg',id:10},
        {title:"Fish",category:'non-veg',id:11},
        {title:"chicken",category:'non-veg',id:12},
        {title:"potato",category:'veg',id:13}
    ]

    const allItems = items
                        .map(item=>(<li key={item.id} style={{color:item.category=='veg'?'green':'red'}}>{item.title}</li>))

    const vegItems = items.filter(item=>item.category=='veg')
                            .map(item=>(<li key={item.id}>{item.title}</li>))

    const nonVeg = items.filter(item=>item.category=='non-veg')
                        .map(item=><li key={item.id}>{item.title}</li>)

    return(
        <>
        <h1>All Items...</h1>
        <ol>{allItems}</ol>
        <h2>Veg Items</h2>
        <ol>{vegItems}</ol>
        <h3>non veg items</h3>
        <ul>{nonVeg}</ul>
        </>
    )
}

export default AllItems;