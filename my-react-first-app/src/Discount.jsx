import { useState } from "react";

function Discount(){

    const originalPrice = 7899
    const[price,setPrice] = useState(0)
    const[discount,setDiscount] = useState(0)

    const applyDiscount = (discountValue)=>{
        if(discountValue===10)
        {
            setDiscount(10)
            setPrice(originalPrice*0.1)
        }
        else if(discountValue===20)
        {
            setDiscount(20)
            setPrice(originalPrice*0.2)
        }
        else if(discountValue===30)
        {
            setDiscount(30)
            setPrice(originalPrice*0.3)
        }
        else
        {
            setDiscount(0)
            setPrice(0)
        }
    }
   
    const afterDiscount = originalPrice-price

    return(
        <>
        <h1>Original Price:${originalPrice}</h1>
        <h2>Discounted price:${price.toFixed(2)}</h2>
        <h3>Price after discount:${originalPrice-price}</h3>
        <h3>Discount Applied:{discount}%</h3>
        <p>click button to apply discount</p>
        <button onClick={()=>applyDiscount(10)}>Apply discount 10%</button>
        <button onClick={()=>applyDiscount(20)}>Apply discount 20%</button>
        <button onClick={()=>applyDiscount(30)}>Apply discount 30%</button>
        <button onClick={()=>applyDiscount(0)}>Reset</button>
        </>
    )

}
export default Discount;