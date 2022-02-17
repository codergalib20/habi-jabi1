const income = document.getElementById("income-input");
const food = document.getElementById("food-input");
const rent = document.getElementById("rent-input");
const clothes = document.getElementById("others-input");
// Save Input
const saveValue = document.getElementById("save-input");
// Show text=======
const totalExpenses = document.getElementById("total-expenses");
const totalBalance = document.getElementById("balance-field");
const errorShow = document.getElementById("errorShow");
let myIncome;
let balance;
document.getElementById("calculate-btn").addEventListener("click", () => {
  incomeField = parseFloat(income.value);
  foodField = food.value;
  rentField = rent.value;
  clothesField = clothes.value;
  const totalBuy =
    parseFloat(foodField) + parseFloat(rentField) + parseFloat(clothesField);
  if (!incomeField || !foodField || !rentField || !clothesField) {
    errorShow.innerHTML = `<i class="fa-solid fa-xmark"></i> All field Must be Up`
  } else {
    if (incomeField < 0 || foodField < 0 || rentField < 0 || clothesField < 0) {
        errorShow.innerHTML = (`<i class="fa-solid fa-xmark"></i> Please giv a positive number`);
      clearValue();
    } else {
      if (incomeField < totalBuy) {
        errorShow.innerHTML = `<i class="fa-solid fa-xmark"></i> Apnar taka nai`;
        clearValue();
      } else {
        myIncome = incomeField;
        totalExpenses.innerText = totalBuy;
        balance = incomeField - totalBuy
        totalBalance.innerText = balance;
        errorShow.innerText = ""
        clearValue();
      }
    }
  }
});
document.getElementById("save-btn").addEventListener("click", () => {
  const saveValueField = saveValue.value;
  console.log(myIncome);
  const saveBalance = (myIncome * parseFloat(saveValueField) ) / 100;
  const remaining = balance - saveBalance
  document.getElementById("save-amount").innerText = saveBalance;
  document.getElementById("rest-balance").innerText = remaining
});
function clearValue() {
  income.value = "";
  food.value = "";
  rent.value = "";
  clothes.value = "";
}
