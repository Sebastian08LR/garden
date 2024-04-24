export const getAllProductsFromOrnamentalsGamaWith100stockOrMore = async()=>{
    let res = await fetch("http://localhost:5506/products")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(product =>{
        if(product.gama == "Ornamentales" && product.stock > 100){
                dataUpdate.push(product);
        }
    })
   /*  dataUpdate = [...new Set(dataUpdate)] */
    return dataUpdate.sort((a,b)=> b.price_sale - a.price_sale);
}