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

function cashRegister(price, cash, cid) {
  const totalCash = cid.reduce((acc, curr) => {
    console.log(curr[1]);
    return acc + curr[1];
  }, 0);

  if (cash < price) {
    return { status: "INCORRECT_PAYMENT", change: [] };
  }

  if (totalCash < cash - price) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
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
