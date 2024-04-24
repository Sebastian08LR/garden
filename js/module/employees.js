export const getAllEmployeesNamesLastnamesAndEmailsWhichBossCode7 = async()=>{
    let res = await fetch("http://localhost:5502/employees?code_boss=7")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push({
            name: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            email, 
            boss_code: val.code_boss
        })
    });
    return dataUpdate;
}

export const getAllBossNameLastnamesAndEmail = async()=>{
    let res = await fetch("http://localhost:5502/employees?employee_code=1")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
        dataUpdate.push({
            puesto: val.position,
            name: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,
            email
            
        })
    });
    return dataUpdate;
}

export const getAllEmployeesNamesLastnamesAndEmailsWhoAreNotSalesRepresentatives = async()=>{
    let res = await fetch("http://localhost:5502/employees?position=Representante Ventas")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        dataUpdate.push({
            puesto: val.position,
            name: val.name,
            apellidos: `${val.lastname1} ${val.lastname2}`,            
        })
    });
    return dataUpdate;
}