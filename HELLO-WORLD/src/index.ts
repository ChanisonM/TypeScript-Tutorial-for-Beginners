// Optional Chaning
type Customer = {
    birthday? : Date
}

function getCustomer(id : number) : Customer | null | undefined{
    return id === 0 ? null :{
        birthday : new Date
    }
}

let customer = getCustomer(1)
// Normal Case
    // if(customer !== null && customer !== undefined)
// Optional Property access operator
    console.log(customer?.birthday?.getFullYear());


// Optional element access operator
// customers?. [0]