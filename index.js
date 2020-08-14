let moment = require('moment');
moment.locale("es")

// 1.¿Cuántos días tuvo el mes de febrero del año 1998?
// const Diasfeb = (año = 1998) =>{
//     let febrero = moment([año,1,1])
//     let dias = 0
//     while(febrero.format("DD MMMM YYYY").includes("f")){
//         febrero.add(1,"days")
//         dias++
//     }
//     console.log(`en el año ${año} Febrero tiene ${dias} dias `)

// }

// Diasfeb();


// 2.¿Qué día fue el 2018-01-13?
// const Dia = ( ) =>{
//     const fecha = moment([2018, 0,13])
//     return console.log(`en el ${fecha.calendar()} fue ${fecha.format("dddd")}`);
    
// }

// Dia();


// 3.En base a la siguiente lista, regresa una lista de fechas que correspondan al día actual.
// const DiaActual = () =>{
//     const DiaActual = moment().format("YYYY MM DD");
//     let ActualDia = []
//     const Fecha = 
//     ["2020 08 14",
//     "2019 08 11",
//     "2020 08 11",
//     "2020 06 19",
//     "2018 10 08",
//     "2020 05 11",
//     "2020 08 11",
//     "2020 08 12"]
    
//     Fecha.forEach(e =>{
//         if(e === DiaActual){
//             ActualDia.push(e)
//         }
//     })
//     console.log(ActualDia)
// }
//  DiaActual();



// 4.De la siguiente lista de fechas, regresa aquellas que sean menoresa la fecha de hoy
// const DiaActual = () =>{
//     const DiaActual = moment().format("YYYY MM DD");
//     let ActualDia = []
//     const Fecha = 
//     [
//     "2020-11-14",
//     "2018-10-20",
//     "2020-09-11",
//     "2017-08-19",
//     "2020-04-15",
//     "2015-08-11",
//     "1999-05-17",
//     "1998-02-23"
// ]
    
//     Fecha.forEach(e =>{
//         if(e <DiaActual){
//             ActualDia.push(e)
//         }
//     })
//     console.log(ActualDia)
// }
//  DiaActual();


 
// 5.De la siguiente lista de fechas, regresa aquellas que sean mayoresa la fecha de hoy
// const DiaActual = () =>{
//     const DiaActual = moment().format("YYYY MM DD");
//     let ActualDia = []
//     const Fecha = 
//     [
//     "2020-11-14",
//     "2018-10-20",
//     "2020-09-11",
//     "2017-08-19",
//     "2020-04-15",
//     "2015-08-11",
//     "1999-05-17",
//     "1998-02-23"
// ]
    
//     Fecha.forEach(e =>{
//         if(e > DiaActual){
//             ActualDia.push(e)
//         }
//     })
//     console.log(ActualDia)
// }
//  DiaActual();

// 6.De la siguiente lista de fechas, regresa aquellas en las que su año sea bisiesto
// let fechas2 = [
//     '2020-11-14',
//     '2000-10-20',
//     '2020-09-11',
//     '2017-08-19',
//     '2020-04-15',
//     '2015-08-11',
//     '1999-05-17',
//     '1998-02-23',
// ];
// const isLeap = (listaFechas) => {
//     return listaFechas.filter( date => moment(date).isLeapYear() );
// }

// console.log(isLeap(fechas2));

// Reto:  De la siguiente lista de fechas, regresa aquellas que correspondana la siguiente semana
let fechas3 = [
    "2020-08-14",
    "2020-08-20",
    "2020-08-11",
    "2020-08-19",
    "2020-08-15",
    "2020-08-11",
    "2020-08-17",
    "2020-08-23"
];

const DiaSemana = (listaFechas) => {
    return listaFechas.filter( date => moment(date).week( ));
}
console.log(DiaSemana(fechas3));

    