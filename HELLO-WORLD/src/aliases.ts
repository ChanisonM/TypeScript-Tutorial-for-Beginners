// Type Aliases

type Employee = {
    readonly id : number ,
    name : string ,
    retire : (date : Date)=> void
}

let employeese : Employee = {
    id : 1 ,
    name : "Chanison" ,
    retire : (date : Date)=>{
        console.log(date);
    }
}