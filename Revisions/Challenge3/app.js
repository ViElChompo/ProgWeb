"use strict";
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

  const getSubtotal = (table) => {
    let subtotal = 0;
    table.orders.forEach((order) => {
      subtotal += order.price * order.qty;
    });
    return subtotal;
  };
  
  const calcPercentage = (sub, perc) => +((sub / 100) * perc).toFixed(2);

  const createBill = (table) => {

    const subtotal = getSubtotal(table);
    const tax = calcPercentage(subtotal, 7.7);
    const tip = calcPercentage(subtotal, 10);
    const bill = {
        subtotal,
        tax, 
        tip, 
        total : `CHF ${(subtotal + tax + tip).toFixed(2)}`
    };
    return bill;

  }

  register.forEach((table) => {

        console.log(createBill(table));

  })