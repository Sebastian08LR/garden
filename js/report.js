/* import {
    updateClock
}from "./component/clock.js"; */
import { 
    getClientsEmployeeAndCity,
    getClientNameAndInfoFromSalesManager,
    getAllClientsThatHaveMadePayments,
    getAllClientsThatHaveNotMadePayments,
    getAllClientsThatHaveMadePaymentsAndOfficeLocation,
    getAllClientsThatHaveNotMadePaymentsAndOfficeLocation,
    getAllClientsNamesWithOrdersDeliveredAfterExpectedTime
 } from "./module/clients.js";

import{
    getDirectionOfficeWithClientsInFuenlabrada
} from "./module/offices.js"

import{
    getEmployeeNameAndBossName,
    getEmployeeNameAndBossesNames
} from "./module/employees.js"
window.addEventListener("load",()=>{

    const queryAboutTable1 = document.querySelector("#queryAboutTable1");
    queryAboutTable1.addEventListener("click", async(e)=>{
        let [,report__container] = queryAboutTable1.children
        if(!report__container.innerHTML){
            let data = await getClientNameAndInfoFromSalesManager();
            let plantilla = "";
            console.log(data);
            data.forEach(val => {
                plantilla += `
                    <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre_del_cliente}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del Representante de ventas: </b>${val.nombre_del_representante_de_ventas}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            report__container.innerHTML = plantilla;
        }
    })
    
    const queryAboutTable2 = document.querySelector("#queryAboutTable2");
    queryAboutTable2.addEventListener("click", async(e)=>{
        let [,report__container] = queryAboutTable2.children
        if(!report__container.innerHTML){
            let data = await getAllClientsThatHaveMadePayments();
            let plantilla = "";
            console.log(data);
            data.forEach(val => {
                plantilla += `
                    <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre_del_cliente}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del Representante de ventas: </b>${val.nombre_del_representante_de_ventas}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            report__container.innerHTML = plantilla;
        }
    })
    
    const queryAboutTable3 = document.querySelector("#queryAboutTable3");
    queryAboutTable3.addEventListener("click", async(e)=>{
        let [,report__container] = queryAboutTable3.children
        if(!report__container.innerHTML){
            let data = await getAllClientsThatHaveNotMadePayments();
            let plantilla = "";
            console.log(data);
            data.forEach(val => {
                plantilla += `
                    <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre_del_cliente}</div>
                    </div>
                    <div class="card__body">
                    <div class="body__marck">
                            <p><b>Nombre del Representante de ventas: </b>${val.nombre_del_representante_de_ventas}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            report__container.innerHTML = plantilla;
        }
    })
    
    const queryAboutTable4 = document.querySelector("#queryAboutTable4");
    queryAboutTable4.addEventListener("click", async(e)=>{
        let [,report__container] = queryAboutTable4.children
        if(!report__container.innerHTML){
            let data = await getAllClientsThatHaveMadePaymentsAndOfficeLocation();
            let plantilla = "";
            console.log(data);
            data.forEach(val => {
                plantilla += `
                    <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre_del_cliente}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del Representante de ventas: </b>${val.nombre_del_representante_de_ventas}</p>
                            <p><b>Ubicación de la oficina: </b>${val.ubicacion_de_la_oficina}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            report__container.innerHTML = plantilla;
        }
    })
    
    const queryAboutTable5 = document.querySelector("#queryAboutTable5");
    queryAboutTable5.addEventListener("click", async(e)=>{
        let [,report__container] = queryAboutTable5.children
        if(!report__container.innerHTML){
            let data = await getAllClientsThatHaveNotMadePaymentsAndOfficeLocation();
            let plantilla = "";
            console.log(data);
            data.forEach(val => {
                plantilla += `
                    <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre_del_cliente}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del Representante de ventas: </b>${val.nombre_del_representante_de_ventas}</p>
                            <p><b>Ubicación de la oficina: </b>${val.ubicacion_de_la_oficina}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            report__container.innerHTML = plantilla;
        }
    })
    
    const queryAboutTable6 = document.querySelector("#queryAboutTable6");
    queryAboutTable6.addEventListener("click", async(e)=>{
        let [,report__container] = queryAboutTable6.children
        if(!report__container.innerHTML){
            let data = await getDirectionOfficeWithClientsInFuenlabrada();
            let plantilla = "";
            console.log(data);
            data.forEach(val => {
                plantilla += `
                    <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre_del_cliente}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Dirección de la Oficina: </b>${val.direccion}</p>
                            <p><b>Ciudad: </b>${val.ciudad}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            report__container.innerHTML = plantilla;
        }
    })
    
    const queryAboutTable7 = document.querySelector("#queryAboutTable7");
    queryAboutTable7.addEventListener("click", async(e)=>{
        let [,report__container] = queryAboutTable7.children
        if(!report__container.innerHTML){
            let data = await getClientsEmployeeAndCity();
            let plantilla = "";
            console.log(data);
            data.forEach(val => {
                plantilla += `
                    <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b>${val.name_employee}</p>
                            <p><b>Ciudad: </b>${val.city}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            report__container.innerHTML = plantilla;
        }
    })
    
    const queryAboutTable8 = document.querySelector("#queryAboutTable8");
    queryAboutTable8.addEventListener("click", async(e)=>{
        let [,report__container] = queryAboutTable8.children
        if(!report__container.innerHTML){
            let data = await getEmployeeNameAndBossName();
            let plantilla = "";
            console.log(data);
            data.forEach(val => {
                plantilla += `
                    <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre_empleado}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Jefe: </b>${val.nombre_jefe}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            report__container.innerHTML = plantilla;
        }
    })
    
    const queryAboutTable9 = document.querySelector("#queryAboutTable9");
    queryAboutTable9.addEventListener("click", async(e)=>{
        let [,report__container] = queryAboutTable9.children
        if(!report__container.innerHTML){
            let data = await getEmployeeNameAndBossesNames();
            let plantilla = "";
            console.log(data);
            data.forEach(val => {
                plantilla += `
                    <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre_empleado}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Jefe: </b>${val.nombre_jefe}</p>
                            <p><b>Jefe del Jefe: </b>${val.nombre_del_jefe_del_jefe}</p>
                        </div>
                    </div>
                </div>
                `;
            });
            report__container.innerHTML = plantilla;
        }
    })
    
    const queryAboutTable10 = document.querySelector("#queryAboutTable10");
    queryAboutTable10.addEventListener("click", async(e)=>{
        let [,report__container] = queryAboutTable10.children
        if(!report__container.innerHTML){
            let data = await getAllClientsNamesWithOrdersDeliveredAfterExpectedTime();
            let plantilla = "";
            console.log(data);
            data.forEach(val => {
                plantilla += `
                    <div class="report__card">
                    <div class="card__title">
                        <div>${val.nombre_del_cliente}</div>
                    </div>
                </div>
                `;
            });
            report__container.innerHTML = plantilla;
        }
    })
})

let btn = document.querySelectorAll("button")
let report__menu = document.querySelectorAll(".report__menu button")
let report__details = document.querySelector(".report__details")
btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")
        
        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/
            `
            <details id="queryAboutTable1">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.</marquee></p>
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable2">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.</marquee></p>
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable3">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">3. Muestra el nombre de los clientes que no hayan realizado pagos junto con el nombre de sus representantes de ventas.</marquee></p>
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable4">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.</marquee></p>
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable5">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">5. Devuelve el nombre de los clientes que no hayan hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.</marquee></p>                        
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable6">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">6. Lista la dirección de las oficinas que tengan clientes en Fuenlabrada.</marquee></p>                        
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable7">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">7. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.</marquee></p>
                            
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable8">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">8. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.</marquee></p>
                            
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable9">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">9. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.</marquee></p>   
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable10">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido.</marquee></p>   
                        </div>
                    </summary>
                </details>
                
            `
        }
        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`
                <details id="queryAboutTable1">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.</marquee></p>
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable2">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España.</marquee></p>
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable3">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.</marquee></p>
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable4">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.</marquee></p>
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable5">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.</marquee></p>                        
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable6">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">6. Devuelve un listado con el nombre de los todos los clientes españoles.</marquee></p>                        
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable7">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.</marquee></p>
                            
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
                <details id="queryAboutTable8">
                    <summary>
                        <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction="">8. Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos.</marquee></p>
                            
                        </div>
                    </summary>
                    <div class="report__container"></div>
                </details>
            `;
        }

    })
})
let [clients] = report__menu
clients.click();
