export const getAllProductBill = async()=>{
    let conetion = await fetch("http://localhost:3000/camper")
    let data = await conetion.json();
    return data;
}