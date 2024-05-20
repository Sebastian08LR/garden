import{
    getEmployeeByCode
}from "./employees.js"
import{
    getPaymentInfoByClientCode
}from "./payments.js"
import{
    getOfficeInfoByOfficeCode
}from "./offices.js"
import{
    getAllOrdersDeliveredAfterExpectedTime,
    getRequestInfoByCode
} from "./request.js"
import{
    getProductInfoByCode
} from "./products.js"
import{
    getRequestDetailsByCode
} from "./request_details.js"
export const getClientByCode = async(code)=>{
    let res = await fetch(`http://localhost:5501/clients?client_code=${code}`)
    let dataClients = await res.json();
    return dataClients;
}
export const getClientByCity = async(code)=>{
    let res = await fetch(`http://localhost:5501/clients?city=${code}`)
    let dataClients = await res.json();
    return dataClients;
}
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

export const getClientNameAndInfoFromSalesManager = async() =>{
    let res = await fetch("http://localhost:5501/clients")
    let clients = await res.json();
    let dataUpdate = [];   
    /* The forEach funtion do not work correctly if you use with it an async, 
       for this consult its better if we used insted the (For of)function 
       this function can executed the (await) without problem */
    for (const client of clients) {
        let sales_manager_code = client.code_employee_sales_manager;
        let [sales_manager_info] = await getEmployeeByCode(sales_manager_code);
        dataUpdate.push({
            nombre_del_cliente: client.client_name,
            nombre_del_representante_de_ventas: `${sales_manager_info.name} ${sales_manager_info.lastname1} ${sales_manager_info.lastname2}`
        });
    }
    return dataUpdate;
}

export const getAllClientsThatHaveMadePayments = async() =>{
    let res = await fetch("http://localhost:5501/clients")
    let clients = await res.json();
    let dataUpdate = [];   
    /* The forEach funtion do not work correctly if you use with it an async, 
       for this consult its better if we used insted the (For of)function 
       this function can executed the (await) without problem */
    for (const client of clients) {
        let sales_manager_code = client.code_employee_sales_manager;
        let client_code = client.client_code
        let [payment_info] = await getPaymentInfoByClientCode(client_code)
        let [sales_manager_info] = await getEmployeeByCode(sales_manager_code);
        if(payment_info){
        dataUpdate.push({
            nombre_del_cliente: client.client_name,
            nombre_del_representante_de_ventas: `${sales_manager_info.name} ${sales_manager_info.lastname1} ${sales_manager_info.lastname2}`,
            });
        }
    }
    return dataUpdate;
}

export const getAllClientsThatHaveNotMadePayments = async() =>{
    let res = await fetch("http://localhost:5501/clients")
    let clients = await res.json();
    let dataUpdate = [];   
    /* The forEach funtion do not work correctly if you use with it an async, 
       for this consult its better if we used insted the (For of)function 
       this function can executed the (await) without problem */
    for (const client of clients) {
        let sales_manager_code = client.code_employee_sales_manager;
        let client_code = client.client_code
        let [payment_info] = await getPaymentInfoByClientCode(client_code)
        let [sales_manager_info] = await getEmployeeByCode(sales_manager_code);
        if(payment_info == undefined){
        dataUpdate.push({
            code: client.client_code,
            nombre_del_cliente: client.client_name,
            nombre_del_representante_de_ventas: `${sales_manager_info.name} ${sales_manager_info.lastname1} ${sales_manager_info.lastname2}`,
            });
        }
    }
    return dataUpdate;
}

export const getAllClientsThatHaveMadePaymentsAndOfficeLocation = async() =>{
    let res = await fetch("http://localhost:5501/clients")
    let clients = await res.json();
    let dataUpdate = [];   
    /* The forEach funtion do not work correctly if you use with it an async, 
       for this consult its better if we used insted the (For of)function 
       this function can executed the (await) without problem */
    for (const client of clients) {
        let sales_manager_code = client.code_employee_sales_manager;
        let client_code = client.client_code
        let [payment_info] = await getPaymentInfoByClientCode(client_code)
        let [sales_manager_info] = await getEmployeeByCode(sales_manager_code)
        let [office_info] = await getOfficeInfoByOfficeCode(sales_manager_info.code_office);
        if(payment_info){
        dataUpdate.push({
            nombre_del_cliente: client.client_name,
            nombre_del_representante_de_ventas: `${sales_manager_info.name} ${sales_manager_info.lastname1} ${sales_manager_info.lastname2}`,
            ubicacion_de_la_oficina: office_info.city
            });
        }
    }
    return dataUpdate;
}

export const getAllClientsThatHaveNotMadePaymentsAndOfficeLocation = async() =>{
    let res = await fetch("http://localhost:5501/clients")
    let clients = await res.json();
    let dataUpdate = [];   
    /* The forEach funtion do not work correctly if you use with it an async, 
       for this consult its better if we used insted the (For of)function 
       this function can executed the (await) without problem */
    for (const client of clients) {
        let sales_manager_code = client.code_employee_sales_manager;
        let client_code = client.client_code
        let [payment_info] = await getPaymentInfoByClientCode(client_code)
        let [sales_manager_info] = await getEmployeeByCode(sales_manager_code)
        let [office_info] = await getOfficeInfoByOfficeCode(sales_manager_info.code_office);
        if(payment_info == undefined){
        dataUpdate.push({
            nombre_del_cliente: client.client_name,
            nombre_del_representante_de_ventas: `${sales_manager_info.name} ${sales_manager_info.lastname1} ${sales_manager_info.lastname2}`,
            ubicacion_de_la_oficina: office_info.city
            });
        }
    }
    return dataUpdate;
}

export const getClientsEmployeeAndCity = async() =>{
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1:address1Client,
            address2:address2Client,
            city,
            region:regionClients,
            country:countryClients,
            postal_code:postal_codeClients,
            limit_credit,
            id:idClients,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployeeByCode(clientsUpdate.code_employee_sales_manager)
        let {
            extension,
            email,
            code_boss,
            position,
            id:idEmploy,
            name,
            lastname1,
            lastname2,
            employee_code,
            ...employUpdate
        } = employ

        let [office] = await getOfficeInfoByOfficeCode(employUpdate.code_office)

        let {
            country:countryOffice,
            region:regionOffice,
            postal_code:postal_codeOffice,
            movil,
            address1:address1Office,
            address2:address2Office,
            id:idOffice,
            ...officeUpdate
        } = office


        let data = {...clientsUpdate, ...employUpdate, ...officeUpdate};
        let {
            code_employee_sales_manager,
            code_office,
            ...dataUpdate       
        }=data;

        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`
        clients[i] = dataUpdate
    }
    // [
    //     {
    //         city: "San Francisco"
    //         client_name : "GoldFish Garden"
    //         name_employee: "Walter Santiago Sanchez Lopez"
    //     }
    // ]
    return clients;
}

export const getAllClientsNamesWithOrdersDeliveredAfterExpectedTime= async()=>{
    let res = await fetch(`http://localhost:5501/clients`)
    let clients = await res.json();
    let dataUpdate = [];
    let request_data = await getAllOrdersDeliveredAfterExpectedTime();
    let uniqueClientNames = new Set(); // Conjunto para almacenar nombres únicos de clientes

    for (const client of clients) {
        for (const data of request_data) {
            if (client.client_code === data.codigo_de_cliente) {
                uniqueClientNames.add(client.client_name); // Agregar nombre del cliente al conjunto
            }
        }
    }

    // Convertir el conjunto en un array
    dataUpdate = Array.from(uniqueClientNames).map(clientName => ({
        nombre_del_cliente: clientName
    }));
    return dataUpdate;
}

export const getAllGammasPurchasedForClients = async () => {
    let res = await fetch(`http://localhost:5501/clients`);
    let clients = await res.json();
    let dataUpdate = [];

    for (const client of clients) {
        let code_client = client.client_code;
        let [request_info] = await getRequestInfoByCode(code_client);
        
        if (request_info) { // Verificar si request_info es válido
            let code_request = request_info.code_request;
            console.log(code_request);
            
            let [request_details_info] = await getRequestDetailsByCode(code_request);
            console.log(request_details_info);
            
            if (request_details_info) { // Verificar si request_details_info es válido
                let product_code = request_details_info.product_code;
                console.log(product_code);
            }
        }
    }
};