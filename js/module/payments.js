export const getAllOrdersPaidIn2008WithPayPal = async()=>{
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(payment =>{
        let payment_date = null;
        if(payment.date_payment){
            payment_date = (payment.date_payment.split('-'))[0] 
        }
        if( payment_date == "2008" && payment.payment == "PayPal"){
                dataUpdate.push(payment);
        }
    })
   /*  dataUpdate = [...new Set(dataUpdate)] */
   return dataUpdate.reverse();
}

export const getAllPossiblePaymentsMethods = async()=>{
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(payment =>{
                dataUpdate.push(payment.payment);
    })
    dataUpdate = [...new Set(dataUpdate)]
    
    return dataUpdate;
}

export const getPaymentInfoByClientCode = async(code)=>{
    let res = await fetch(`http://localhost:5505/payments?code_client=${code}`)
    let dataClients = await res.json();
    return dataClients;
}