"use strict";
function kgtoLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgtoLbs(10);
kgtoLbs('10kg');
//# sourceMappingURL=union.js.map