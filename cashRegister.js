// GOAL: Implement a cash register function cashRegister that:

// Accepts purchase price as the first argument(price), payment as the second argument(cash),
// and cash -in -drawer(cid) as the third argument.

// cid is a 2D array listing available currency.

// The cashRegister function should always return an object with a status key and a change key.

// Return {status: "INCORRECT_PAYMENT", change: []} if cash is less than the price.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cid (cash-in-drawer) is less than the change due or if you cannot return the exact change.

// Return { status: "CLOSED", change: [...] } with cash -in -drawer as the value for the key change if it is equal to the change due.
// Include each currency unit in the drawer, even if its value is zero. (i.e.DO display["NICKEL", 0])

// Otherwise, return { status: "OPEN", change: [...] }, with the change due in coins and bills, as the value of the change key.
// Only include the value of a currency unit if its value is not zero. (i.e.do NOT display["NICKEL", 0])

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  console.log("change: " + change);

  const currencyVal = {
    "ONE HUNDRED": 100,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    ONE: 1,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKEL: 0.05,
    PENNY: 0.01,
  };

  const cidSum = cid.reduce((acc, val) => {
    if (!isNaN(acc + val[1])) {
      return acc + val[1];
    }
  }, 0);

  const revCid = cid.reverse();
  let changeObj = {};

  function calculateChange() {
    for (let unit in currencyVal) {
      // loop through each Currency Unit
      revCid.forEach((amount) => {
        // loop through each amount
        if (amount[1] >= currencyVal[unit] && amount[0] === unit) {
          // check what I have in cash-in-drawer
          while (change - currencyVal[unit] >= 0 && amount[1]) {
            // calculate the change and convert it into an object
            console.log(unit, currencyVal[unit]);
            if (
              Object.keys(changeObj).length === 0 &&
              changeObj.constructor === Object
            ) {
              changeObj[unit] = currencyVal[unit];
            } else {
              if (changeObj.hasOwnProperty(unit)) {
                changeObj[unit] += currencyVal[unit];
              }
              if (!changeObj.hasOwnProperty(unit)) {
                changeObj[unit] = currencyVal[unit];
              }
            }

            change -= currencyVal[unit];
            amount[1] -= currencyVal[unit];
          }
        }
      });
    }

    let changeArr = Object.entries(changeObj); // convert changeObj into an Array
    return changeArr;
  }

  if (change < 0 || change > cidSum) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else {
    return { status: "OPEN", change: calculateChange() };
  }
}

// EXAMPLE INVOCATION, so you can `console.log` the outputs
cashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
