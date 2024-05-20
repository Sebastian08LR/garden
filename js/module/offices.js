import{
    getClientByCity
}from "./clients.js"
import{
    getEmployeeByCode
}from "./employees.js"
export const getOfficeInfoByOfficeCode = async(code)=>{
    let res = await fetch(`http://localhost:5504/offices?code_office=${code}`)
    let dataClients = await res.json();
    return dataClients;
}


export const getAllOfficesWithCodeAndCity = async()=>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            codigo: val.code_office,
            ciudad: val.city
        })
    });
    return dataUpdate;
}

export const getAllOfficesFromSpainWithCityAndMobil = async()=>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            ciudad: val.city,
            telefono: val.movil
        })
    });
    return dataUpdate;
}

export const getDirectionOfficeWithClientsInFuenlabrada = async() =>{
    let res = await fetch("http://localhost:5501/clients?city=Fuenlabrada")
    let clients = await res.json();
    let dataUpdate = [];   
    /* The forEach funtion do not work correctly if you use with it an async, 
       for this consult its better if we used insted the (For of)function 
       this function can executed the (await) without problem */
    for (const client of clients) {
        let sales_manager_code = client.code_employee_sales_manager;
        let [sales_manager_info] = await getEmployeeByCode(sales_manager_code)
        let [office_info] = await getOfficeInfoByOfficeCode(sales_manager_info.code_office);
        dataUpdate.push({
                nombre_del_cliente: client.client_name,
                ciudad: client.city,
                direccion: `${office_info.address1} ${office_info.address2}`
            });
        }
        return dataUpdate;
    }

