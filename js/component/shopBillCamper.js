export const getAllProductBill = async()=>{
    let conetion = await fetch("http://172.16.101.146:3000/camper")
    let data = await conetion.json();
    return data;
}