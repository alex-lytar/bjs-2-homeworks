function solveEquation(a, b, c) {
  let arr;
  // код для задачи №1 писать здесь
  "use strict";
  const discr = b ** 2 - 4 * a * c;
  if (discr < 0) {
    arr = [];
  } else if (discr === 0) {
    arr = [- b / (2 * a)];
  } else {
    arr = [(- b + Math.sqrt(discr)) / (2 * a), (- b - Math.sqrt(discr)) / (2 * a)]
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  "use strict"; 
  let totalAmount = 0; 
  let mounthPercent = (percent / 100) / 12;
  let firstPayment = parseInt(contribution);
  let objectPrice = parseInt(amount);
  if (Number.isNaN(mounthPercent)){
    return totalAmount	= `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else if (Number.isNaN(firstPayment)){
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;  
  } else if (Number.isNaN(objectPrice)){
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;  
	}
	  else {
  let bodyCredit = objectPrice - firstPayment;
  const dateNow = new Date();
  const dateFuture = new Date(date);
  let dateTerm = Math.floor((dateFuture - dateNow) / 1000 / 60 / 60 / 24 / 30); 
  let payDay = bodyCredit * (mounthPercent + (mounthPercent / (((1 + mounthPercent) ** dateTerm) - 1)));
  totalAmount = payDay * dateTerm;
  return Number(totalAmount.toFixed(2));
    }

  // код для задачи №2  писать здесь



}
