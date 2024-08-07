"use strict"
function getElementWidth(content, padding, border) {
    const cont = Number.parseFloat(content);
    const padd = Number.parseFloat(padding);
    const bord = Number.parseFloat(border);

    return cont + padd * 2 + bord * 2;
};

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
