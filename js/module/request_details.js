export const getRequestDetailsByCode = async(code)=>{
    let res = await fetch(`http://172.16.101.146:5397/request_details?code_request=${code}`)
    let dataClients = await res.json();
    return dataClients;
}