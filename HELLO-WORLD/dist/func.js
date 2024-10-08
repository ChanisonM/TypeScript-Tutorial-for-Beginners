"use strict";
function calculateTax(incom, taxYear) {
    if (taxYear < 2022)
        return incom * 1.2;
    return incom * 1.3;
}
calculateTax(10000, 2022);
//# sourceMappingURL=func.js.map