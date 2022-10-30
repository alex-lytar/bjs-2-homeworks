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
  let percentTest = Number(percent);
  let contributionTest = Number(contribution);
  let amountTest = Number(amount);
  
  if (percentTest != Number(percent)){
	alert(`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
    return totalAmount	
  } else if (contributionTest != Number(contribution)){
    alert(`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
    return totalAmount  
  } else if (amountTest != Number(amount)){
    alert(`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
    return totalAmount  
	}
	  else {
  let totalAmount;
  let bodyCredit = amount - contribution;
  const dateNow = new Date();
  const dateFuture = new Date(date);
  let dateTerm = Math.floor((dateFuture - dateNow) / 1000 / 60 / 60 / 24 / 30);
  let mounthPercent = (percent / 100) / 12; 
  let payDay = bodyCredit * (mounthPercent + (mounthPercent / (((1 + mounthPercent) ** dateTerm) - 1)));
  totalAmount = payDay * dateTerm;
  return Number(totalAmount.toFixed(2));
    }

  // код для задачи №2 писать здесь



}
