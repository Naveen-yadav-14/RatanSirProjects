function Product(){
    const product = {
        id:101,
        name:"smartphone",
        price:"29000",
        avaliable:true
      }
    
      return(
        <>
        <h1>Product Details...</h1>
        <p>Product ID:{product.id}</p>
        <p>Product Name:{product.name}</p>
        <p>Product Price:{product.price}</p>
        <p>Product Avaliablity:{product.avaliable?"In stock":"out-of-stock"}</p>
        </>
      )
}
export default Product;