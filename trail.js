const myVehicle = [1,3]
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
  }
  
  const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

  console.log(myUpdatedVehicle);


// const numbers = [1, 2, 3, 4, 5, 6];

// const [one, two, ...rest] = numbers;

// console.log(one);
// console.log(two);
// console.log(rest);
