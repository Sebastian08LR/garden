import { 
    getAllOfficesWithCodeAndCity,
    getAllOfficesFromSpainWithCityAndMobil

 } from "./module/offices.js";
 import { 
    getAllEmployeesNamesLastnamesAndEmailsWhichBossCode7,
    getAllBossNameLastnamesAndEmail,
    getAllEmployeesNamesLastnamesAndEmailsWhoAreNotSalesRepresentatives
 } from "./module/employees.js";

 import { 
    getAllClientsNamesThatAreFromSpain,
    getAllClientsFromMadridWithSalesRepresentativeWith11Or30
 } from "./module/clients.js";
 import { 
    getAllPossibleStatuForAPackage,
    getAllClientsPaymentsDate,
    getAllOrdersDeliveredBeforeExpectedTime,
    getAllOrdersDeniedIn2009,
    getAllOrdersDeliveredInJanuary,
    getAllOrdersDeliveredAfterExpectedTime
 } from "./module/request.js";
 import{
   getAllOrdersPaidIn2008WithPayPal,
   getAllPossiblePaymentsMethods
 } from "./module/payments.js"
 import{
   getAllProductsFromOrnamentalsGamaWith100stockOrMore
 } from "./module/gama.js"
/* 
First consult
console.log(await getAllOfficesWithCodeAndCity());

Second Consult
console.log(await getAllOfficesFromSpainWithCityAndMobil()) 

Third Consult
console.log( await getAllEmployeesNamesLastnamesAndEmailsWhichBossCode7())

Fourth Consult
console.log(await getAllBossNameLastnamesAndEmail())

fifht
console.log(await getAllEmployeesNamesLastnamesAndEmailsWhoAreNotSalesRepresentatives())

Sixth
console.log(await getAllClientsNamesThatAreFromSpain())


console.log(await getAllPossibleStatuForAPackage())


console.log(await getAllClientsPaymentsDate())


console.log(await getAllOrdersDeliveredBeforeExpectedTime())


console.log(await getAllOrdersDeniedIn2009())


console.log(await getAllOrdersDeliveredInJanuary())


console.log(await getAllOrdersPaidIn2008WithPayPal())


console.log(await getAllPossiblePaymentsMethods())


console.log(await getAllProductsFromOrnamentalsGamaWith100stockOrMore())


console.log(await getAllClientsFromMadridWithSalesRepresentativeWith11Or30())


console.log(await getAllOrdersDeliveredAfterExpectedTime())
*/
