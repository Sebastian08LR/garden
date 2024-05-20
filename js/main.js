import { 
    getAllOfficesWithCodeAndCity,
    getAllOfficesFromSpainWithCityAndMobil,
    getDirectionOfficeWithClientsInFuenlabrada

 } from "./module/offices.js";
 import { 
    getAllEmployeesNamesLastnamesAndEmailsWhichBossCode7,
    getAllBossNameLastnamesAndEmail,
    getAllEmployeesNamesLastnamesAndEmailsWhoAreNotSalesRepresentatives,
    getEmployeeNameAndBossName,
    getEmployeeNameAndBossesNames
 } from "./module/employees.js";

 import { 
    getAllClientsNamesThatAreFromSpain,
    getAllClientsFromMadridWithSalesRepresentativeWith11Or30,
    getClientNameAndInfoFromSalesManager,
    getAllClientsThatHaveMadePayments,
    getAllClientsThatHaveNotMadePayments,
    getAllClientsThatHaveMadePaymentsAndOfficeLocation,
    getAllClientsThatHaveNotMadePaymentsAndOfficeLocation,
    getAllClientsNamesWithOrdersDeliveredAfterExpectedTime,
    getAllGammasPurchasedForClients
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
 } from "./module/products.js"


/*

### Consultas sobre una tabla
   First consult
   console.log(await getAllOfficesWithCodeAndCity());

   Second Consult
   console.log(await getAllOfficesFromSpainWithCityAndMobil()) 

   Third Consult
   console.log( await getAllEmployeesNamesLastnamesAndEmailsWhichBossCode7())

   Fourth Consult
   console.log(await getAllBossNameLastnamesAndEmail())

   fifht Consult
   console.log(await getAllEmployeesNamesLastnamesAndEmailsWhoAreNotSalesRepresentatives())

   Sixth Consult
   console.log(await getAllClientsNamesThatAreFromSpain())

   seventh Consult
   console.log(await getAllPossibleStatuForAPackage())

   eighth Consult
   console.log(await getAllClientsPaymentsDate())

   ninth Consult
   console.log(await getAllOrdersDeliveredBeforeExpectedTime())

   tenth Consult
   console.log(await getAllOrdersDeniedIn2009())

   eleventh Consult
   console.log(await getAllOrdersDeliveredInJanuary())

   twelfth Consult
   console.log(await getAllOrdersPaidIn2008WithPayPal())

   thirteenth Consult
   console.log(await getAllPossiblePaymentsMethods())

   fourteenth Consult
   console.log(await getAllProductsFromOrnamentalsGamaWith100stockOrMore())

   fifteenth Consult
   console.log(await getAllClientsFromMadridWithSalesRepresentativeWith11Or30())

   sixteenth Consult
   console.log(await getAllOrdersDeliveredAfterExpectedTime())

### Consultas multitabla
First Consult
console.log(await getClientNameAndInfoFromSalesManager())

Second Consult
console.log(await getAllClientsThatHaveMadePayments())

Third Consult
console.log(await getAllClientsThatHaveNotMadePayments())

Fourth Consult
console.log(await getAllClientsThatHaveMadePaymentsAndOfficeLocation())

Fifht Consult
console.log(await getAllClientsThatHaveNotMadePaymentsAndOfficeLocation())

sixth
console.log(await getDirectionOfficeWithClientsInFuenlabrada())


*/

console.log(await getAllGammasPurchasedForClients())