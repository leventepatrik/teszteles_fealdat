import { fuggvenyem } from "./main.js";


/*Hozz létre teszteseteket  */
export function tesztesetek_fuggvenyemhet(){
    let szam=1234
    let vart=4321
    console.log(`szam:${szam},várt:${vart},eredmény:${vart===fuggvenyem(szam)}`)


szam=0
vart=0
console.log(
    `szam:${szam},várt:${vart},eredmény:${vart===fuggvenyem(szam)}`

)


szam=32.4
vart=42.3
console.log(
    `szam:${szam},várt:${vart},eredmény:${vart===fuggvenyem(szam)}`

)

szam=Number.MAX_SAFE_INTEGER;
vart=1998043432434
console.log(
    `szam:${szam},várt:${vart},eredmény:${vart===fuggvenyem(szam)}`

)


szam=100;
vart=0;
console.log(
    `szam:${szam},várt:${vart},eredmény:${vart===fuggvenyem(szam)}`

)

szam=null
vart=0
console.log(
    `szam:${szam},várt:${vart},eredmény:${vart===fuggvenyem(szam)}`

)



}