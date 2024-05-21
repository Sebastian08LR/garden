export const getAllPossibleStatuForAPackage = async()=>{
    let res = await fetch("http://172.16.101.146:5398/requests")
    let data = await res.json();
    let uniqueStatus = new Set();
    data.forEach(val => {
        uniqueStatus.add(val.status);
    });

    // Convertir el conjunto a un array
    let uniqueStatusArray = Array.from(uniqueStatus);

    // O si necesitas un array de objetos con la estructura { status: 'valor' }
    let uniqueStatusObjectsArray = uniqueStatusArray.map(status => ({ status }));

    return uniqueStatusObjectsArray;
}

export const getAllClientsPaymentsDate = async()=>{
    let res = await fetch("http://172.16.101.146:5398/requests")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request =>{
        if((request.date_request.split('-'))[0] == 2008){
                dataUpdate.push(request.code_client);
        }
    })
    dataUpdate = [...new Set(dataUpdate)]
    
    return dataUpdate;
}


export const getAllOrdersDeliveredBeforeExpectedTime= async()=>{
    let res = await fetch("http://172.16.101.146:5398/requests")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request =>{
        let expectedDay = null;
        let expectedMonth = null;
        if(request.date_wait){
            expectedDay = (request.date_wait.split('-'))[2]
            expectedMonth = (request.date_wait.split('-'))[1]
        }
        let deliveryDay = null;
        let deliveryMonth = null;
        if (request.date_delivery) {
            deliveryDay = (request.date_delivery.split('-'))[2];
            deliveryMonth = (request.date_delivery.split('-'))[1]
        }
        
        if(expectedMonth == deliveryMonth && Number(deliveryDay) <= Number(expectedDay)-2){
                dataUpdate.push({
                    Codigo_De_Pedido: request.code_request,
                    Codigo_De_cliente: request.code_client,
                    Fecha_Esperada: request.date_wait,
                    Fecha_De_Entrega: request.date_delivery
                });
        }
    })  
    return dataUpdate;
}

export const getAllOrdersDeniedIn2009 = async()=>{
    let res = await fetch("http://172.16.101.146:5398/requests")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request =>{
        if((request.date_request.split('-'))[0] == 2009 && request.status == "Rechazado"){
                dataUpdate.push(request);
        }
    })
   /*  dataUpdate = [...new Set(dataUpdate)] */
    return dataUpdate;
}

export const getAllOrdersDeliveredInJanuary = async()=>{
    let res = await fetch("http://172.16.101.146:5398/requests")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request =>{
        let deliveryMonth = null;
        if(request.date_delivery){
            deliveryMonth = (request.date_delivery.split('-'))[1] 
        }
        if( deliveryMonth == "01" && request.status == "Entregado"){
                dataUpdate.push(request);
        }
    })
   /*  dataUpdate = [...new Set(dataUpdate)] */
    return dataUpdate;
}

export const getAllOrdersDeliveredAfterExpectedTime= async()=>{
    let res = await fetch("http://172.16.101.146:5398/requests")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(request =>{
        let expectedDay = null;
        let expectedMonth = null;
        if(request.date_wait){
            expectedDay = (request.date_wait.split('-'))[2]
            expectedMonth = (request.date_wait.split('-'))[1]
        }
        let deliveryDay = null;
        let deliveryMonth = null;
        if (request.date_delivery) {
            deliveryDay = (request.date_delivery.split('-'))[2];
            deliveryMonth = (request.date_delivery.split('-'))[1]
        }
        
        if(expectedMonth <= deliveryMonth && Number(deliveryDay) > Number(expectedDay)){
                dataUpdate.push({
                    codigo_de_pedido: request.code_request,
                    codigo_de_cliente: request.code_client,
                    fecha_esperada: request.date_wait,
                    fecha_de_entrega: request.date_delivery
                });
        }
    })  
    return dataUpdate;
}

export const getRequestInfoByCode = async(code)=>{
    let res = await fetch(`http://172.16.101.146:5398/requests?code_client=${code}`)
    let dataClients = await res.json();
    return dataClients;
}