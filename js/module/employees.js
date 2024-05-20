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

export const getEmployeeByCode = async(code)=>{
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`)
    let dataClients = await res.json();
    return dataClients;
}

export const getEmployeeNameAndBossName = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let employees = await res.json();
    let dataUpdate = [];   
    /* The forEach funtion do not work correctly if you use with it an async, 
       for this consult its better if we used insted the (For of)function 
       this function can executed the (await) without problem */
    for (const employee of employees) {        
    let [boss1_employee_info] = await getEmployeeByCode(employee.code_boss)
    if(boss1_employee_info){
        dataUpdate.push({
            nombre_empleado: employee.name,
            nombre_jefe: boss1_employee_info.name
        });
    }
    }
    return dataUpdate;
}

export const getEmployeeNameAndBossesNames = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let employees = await res.json();
    let dataUpdate = [];   
    /* The forEach funtion do not work correctly if you use with it an async, 
       for this consult its better if we used insted the (For of)function 
       this function can executed the (await) without problem */
       for (const employee of employees) {        
        let [boss1_employee_info] = await getEmployeeByCode(employee.code_boss)
        if(boss1_employee_info){
            let [boss2_employee_info] = await getEmployeeByCode(boss1_employee_info.code_boss)
            dataUpdate.push({
                nombre_empleado: employee.name,
                nombre_jefe: boss1_employee_info?.name,
                nombre_del_jefe_del_jefe: boss2_employee_info?.name ?? "Sin JEFE"
            });
        }
        }
    return dataUpdate;
}