function checkCashRegisterDemo(price, cash, cid) {
  let change = cash - price;
  let saveChange = cash - price;
  let obj = {};
  let newArr = [];
  let funds = 0;
  let nObj = {
    PENNY: 0,
    NICKEL: 0,
    DIME: 0,
    QUARTER: 0,
    ONE: 0,
    FIVE: 0,
    TEN: 0,
    TWENTY: 0,
    "ONE HUNDRED": 0,
  };

  for (let list of cid) {
    for (let coin of list) {
      if (Number(coin)) {
        funds += coin;
      }
    }
  }

  if (funds < change) {
    obj["status"] = "INSUFFICIENT_FUNDS";
    obj["change"] = [];
    console.log(obj);
    return obj;
  }

  while (saveChange !== 0) {
    console.log(saveChange);

    if (saveChange >= 0.01 && saveChange < 0.05 && cid[0][1] != 0) {
      saveChange -= 0.01;
      cid[0][1] = cid[0][1] - 0.01;
      nObj.PENNY += 0.01;
    } else if (saveChange >= 0.05 && saveChange < 0.1 && cid[1][1] != 0) {
      saveChange -= 0.05;
      cid[1][1] = cid[1][1] - 0.05;
      nObj.NICKEL += 0.05;
    } else if (saveChange >= 0.1 && saveChange < 0.25 && cid[2][1] != 0) {
      saveChange -= 0.1;
      cid[2][1] -= 0.1;
      nObj.DIME += 0.1;
    } else if (saveChange >= 0.25 && saveChange < 1 && cid[3][1] != 0) {
      saveChange -= 0.25;
      cid[3][1] = cid[3][1] - 0.25;
      nObj.QUARTER += 0.25;
    } else if (saveChange >= 1 && saveChange < 5 && cid[4][1] != 0) {
      saveChange -= 1;
      cid[4][1] = cid[4][1] - 1;
      nObj.ONE += 1;
    } else if (saveChange >= 5 && saveChange < 10 && cid[5][1] != 0) {
      saveChange -= 5;
      cid[5][1] = cid[5][1] - 5;
      nObj.FIVE += 5;
    } else if (saveChange >= 10 && saveChange < 20 && cid[6][1] != 0) {
      saveChange -= 10;
      cid[6][1] = cid[6][1] - 10;
      nObj.TEN += 10;
    } else if (saveChange >= 20 && saveChange < 100 && cid[7][1] != 0) {
      saveChange -= 20;
      cid[7][1] = cid[7][1] - 20;
      nObj.TWENTY += 20;
    } else {
      if (saveChange >= 100 && cid[8][1] != 0) {
        saveChange -= 100;
        cid[8][1] = cid[8][1] - 100;
        nObj["ONE HUNDRED"] += 100;
      }
    }
  }

  console.log(nObj);

  return change;
}

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let funds = 0;
  let obj = {};
  let cashCounter = {
    PENNY: 0,
    NICKEL: 0,
    DIME: 0,
    QUARTER: 0,
    ONE: 0,
    FIVE: 0,
    TEN: 0,
    TWENTY: 0,
    "ONE HUNDRED": 0,
  };

  for (let list of cid) {
    for (let coin of list) {
      if (Number(coin)) {
        funds += coin;
      }
    }
  }

  if (funds < change || cid[0][1] === 0.01) {
    obj["status"] = "INSUFFICIENT_FUNDS";
    obj["change"] = [];
    console.log(obj);
    console.log("\n\n");
    return obj;
  }

  while (change !== 0) {
    if (change < 0) {
      break;
    }
    if (change >= 20 && change < 100 && cid[7][1] != 0) {
      change -= 20;
      cid[7][1] -= 20;
      cashCounter.TWENTY += 20;
      continue;
    } else if (change >= 10 && change > 5 && cid[6][1] != 0) {
      change -= 10;
      cid[6][1] -= 10;
      cashCounter.TEN += 10;
      continue;
    } else if (change >= 5 && change > 1 && cid[5][1] != 0) {
      change -= 5;
      cid[5][1] -= 5;
      cashCounter.FIVE += 5;
      continue;
    } else if (change >= 1 && cid[4][1] != 0) {
      change -= 1;
      cid[4][1] -= 1;
      cashCounter.ONE += 1;
      continue;
    } else if (change >= 0.25 && change < 1 && cid[3][1] != 0) {
      change -= 0.25;
      cid[3][1] -= 0.25;
      cashCounter.QUARTER += 0.25;
      continue;
    } else if (change >= 0.1 && change < 0.25 && cid[2][1] != 0) {
      change -= 0.1;
      cid[2][1] -= 0.1;
      cashCounter.DIME += 0.1;
      continue;
    } else if (change >= 0.5 && change < 0.1 && cid[1][1] != 0) {
      change -= 0.05;
      cid[1][1] -= 0.05;
      cashCounter.NICKEL += 0.05;
      continue;
    } else {
      change -= 0.01;
      cid[0][1] -= 0.01;
      cashCounter.PENNY += 0.01;
      continue;
    }
  }

  if (parseFloat(cashCounter.PENNY.toFixed(1)) === 0.5)
    cashCounter["PENNY"] = 0.5;

  let arr = [];

  let keys = Object.keys(cashCounter);
  for (let i = keys.length - 1; i >= 0; i--) {
    if (cashCounter["PENNY"] === 0.5) {
      arr.push([
        keys[keys.length - 1 - i],
        cashCounter[keys[keys.length - 1 - i]],
      ]);
    } else if (cashCounter[keys[i]] != 0) {
      arr.push([keys[i], cashCounter[keys[i]]]);
    }
  }

  if (cashCounter.PENNY === 0.5) {
    obj["status"] = "CLOSED";
    obj["change"] = arr;
    console.log(obj);
    console.log("\n\n");

    return obj;
  }

  obj["status"] = "OPEN";
  obj["change"] = arr;
  console.log(obj);
  console.log("\n\n");

  return obj;
}

checkCashRegister(19.5, 20, [
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

checkCashRegister(3.26, 100, [
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

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

checkCashRegister(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
