function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];

  for (let p of arr) {
    const orbit = Math.round(2*Math.PI*Math.sqrt(Math.pow(p.avgAlt+earthRadius, 3) / GM));
    newArr.push({name: p.name, orbitalPeriod: orbit});
  }

  console.log(newArr);
  return newArr;
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]))
