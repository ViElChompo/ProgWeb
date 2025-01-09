"use strict"
const register = [
    {
        tableID: 0,
        orders: [
            {
                item: "coffee",
                qty: 3,
                price: 3.5
            },
            {
                item: "salad",
                qty: 3,
                price: 8
            },
            {
                item: "steak",
                qty: 3,
                price: 28
            },
            {
                item: "ice cream",
                qty: 3,
                price: 5
            }
        ]
    },
    {
        tableID: 1,
        orders: [
            {
                item: "coffee",
                qty: 2,
                price: 3.5
            },
            {
                item: "salad",
                qty: 2,
                price: 8
            },
            {
                item: "steak",
                qty: 2,
                price: 28
            },
            {
                item: "ice cream",
                qty: 2,
                price: 5
            }
        ]
    }
];


const getSubtotal = function (table) {
    // console.log(table.orders[0].price)

    let subtotal = 0;

    for (let i = 0; i < table.orders.length; i++) {

        subtotal += table.orders[i].price * table.orders[i].qty;

    }
    // console.log(`Sous-total ${subtotal}`);
    return subtotal;

}


const calcPercentage = (num, percentage) =>  num / 100 * percentage;


function createBill(table) {
    const subtotal = getSubtotal(table);
    const tax = calcPercentage(subtotal, 8.1);
    const tip = calcPercentage(subtotal, 10)
    const total = subtotal + tax + tip;
    return {
        subtotal: subtotal,
        tax: tax,
        tip: tip,
        total: total
    }
}

console.log(createBill(register[0]))

function SplitBill(bill, nbrePerson) {

   const totalSplit = `CHF ${math.ceil(+bill.total,split(" ")[1]/nbrePerson)}`;
    return 
}