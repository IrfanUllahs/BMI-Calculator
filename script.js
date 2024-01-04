const p = document.querySelectorAll(".guide-para");
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  if (height === "" || height < 1 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 1 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = parseFloat((weight / ((height * height) / 10000)).toFixed(2));
    console.log(typeof bmi);
    var conclusionDiv = document.querySelector(".conclusion");
    var existingParas = conclusionDiv.querySelectorAll(".guide-para");
    existingParas.forEach(function (para) {
      para.remove();
    });
    if (bmi < 18.6) {
      var underWeightPara = document.createElement("p");
      underWeightPara.className = "guide-para";
      underWeightPara.textContent = "Under Weight = Less than 18.6";
      conclusionDiv.appendChild(underWeightPara);
    } else if (bmi > 18.6 && bmi < 24.9) {
      var normalRangePara = document.createElement("p");
      normalRangePara.className = "guide-para";
      normalRangePara.textContent = "Normal Range = 18.6 and 24.9";
      conclusionDiv.appendChild(normalRangePara);
    } else {
      var overweightPara = document.createElement("p");
      overweightPara.className = "guide-para";
      overweightPara.textContent = "Overweight = Greater than 24.9";

      conclusionDiv.appendChild(overweightPara);
    }

    result.innerHTML = `<span>${bmi}</span>`;
  }
});
