// prevent form from refreshing the page
var form = document.getElementById("form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

// light/dark theme toggle button
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// oxygen gas analysis
function oxy(pao2Value) {
  if (pao2Value >= 80 && pao2Value <= 100) {
    return " with normal oxygenation.";
  } else if (pao2Value >= 60 && pao2Value <= 79) {
    return " with mild hypoxemia.";
  } else if (pao2Value >= 40 && pao2Value <= 59) {
    return " with moderate hypoxemia.";
  } else {
    return " with severe hypoxemia.";
  }
}
// check if oxygen is defined
function calculateOxygen() {
  let pao2Value = document.getElementById("pao2").value;
  if (pao2Value == 0 || pao2Value == null || pao2Value == undefined) {
    analysisResult = calculateValues();
    document.getElementById("analysisResult").innerHTML =
      "<strong>Results:</strong>" + "<br>" + analysisResult + ".";
    return pao2Value == null;
  } else {
    oxygenResult = oxy(pao2Value);
    analysisResult = calculateValues();
    document.getElementById("analysisResult").innerHTML =
      "<strong>Results:</strong>" + "<br>" + analysisResult + oxygenResult;
  }
}

function calculateValues() {
  let ph = document.getElementById("ph").value;
  let co2 = document.getElementById("co2").value;
  let hco3 = document.getElementById("hco3").value;

  if (ph < 7.35) {
    if (hco3 > 26) {
      return "Partially compensated respiratory acidosis";
    } else if (hco3 < 22) {
      if (co2 > 45) {
        return "Combined respiratory and metabolic acidosis";
      } else if (co2 < 35) {
        return "Partially compensated metabolic acidosis";
      } else {
        return "Uncompensated metabolic acidosis";
      }
    } else {
      return "Uncompensated respiratory acidosis";
    }
    // second part
  } else if (ph > 7.45) {
    if (hco3 > 26) {
      if (co2 > 45) {
        return "Partially compensated metabolic alkalosis";
      } else if (co2 < 35) {
        return "Combined respiratory and metabolic alkalosis";
      } else {
        return "Uncompensated metabolic alkalosis";
      }
    } else if (hco3 < 22) {
      return "Partially compensated respiratory alkalosis";
    } else {
      return "Uncompensated respiratory alkalosis";
    }
  } else if (hco3 > 26) {
    return "Fully compensated, either respiratory acidosis, metabolic alkalosis, or normal";
  } else if (hco3 < 22) {
    return "Fully compensated, either respiratory alkalosis, metabolic acidosis, or normal";
  } else {
    return "Normal blood gas";
  }
}
