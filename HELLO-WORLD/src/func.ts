function calculateTax(incom: number , taxYear : number) : number{
    if(taxYear < 2022)
        return incom * 1.2;
    return incom * 1.3
}
calculateTax(10_000 , 2022)