export const getAllClientsNamesThatAreFromSpain = async()=>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            name: val.contact_name,  
            pais: val.country          
        })
    });
    return dataUpdate;
}

export const getAllClientsFromMadridWithSalesRepresentativeWith11Or30 = async()=>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(client => {
        if(client.code_employee_sales_manager == 11 || client.code_employee_sales_manager == 30 ){
            dataUpdate.push(client);
        }
    })
    return dataUpdate;
}
