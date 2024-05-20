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