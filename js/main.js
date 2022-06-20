function getValues() {
  // let ph = document.getElementById("ph").value;
  // let co2 = document.getElementById("co2").value;
  // let hco3 = document.getElementById("hco3").value;
  //   let pao2Value = document.getElementById("pao2").value;
}
var form = document.getElementById("form");
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
function oxy(pao2Value) {
  console.log("Oxy func: " + pao2Value);
  if (pao2Value >= 80 && pao2Value <= 100) {
    return "With normal oxygenation.";
  } else if (pao2Value >= 60 && pao2Value <= 79) {
    return "With mild hypoxemia.";
  } else if (pao2Value >= 40 && pao2Value <= 59) {
    return "With moderate hypoxemia.";
  } else {
    return "With severe hypoxemia.";
  }
}
function calculateOxygen() {
  let pao2Value = document.getElementById("pao2").value;
  if (pao2Value == 0 || pao2Value == null || pao2Value == undefined) {
    console.log("if pao2Value null: " + pao2Value);
    return pao2Value == null;
  } else {
    console.log("if pao2Value !null: " + pao2Value);
    oxygenResult = oxy(pao2Value);

    document.getElementById("resultsAnalysis").textContent =
      "1: PaO2 value is: " + oxygenResult;
    document.getElementById("resultsOxygen").textContent =
      "2: PaO2 value is: " + oxygenResult;
  }
}

// function calculateValues() {
//   if (
//     ph >= 7.35 &&
//     ph <= 7.45 &&
//     co2 >= 35 &&
//     co2 <= 45 &&
//     hco3 >= 22 &&
//     hco3 <= 26
//   ) {
//     if (pao2 == !null) {
//       return "The patient is normal " + oxygenResult;
//     } else {
//       return "The patient is Normal.";
//     }
//   } else if ((ph <= 7.35 && co2 > 45) || (ph < 7.35 && co2 >= 45)) {
//     if (pao2 == !null) {
//       return "The patient is normal " + oxygenResult;
//     } else {
//       return "Respiratory acidosis";
//     }
//   } else if ((ph >= 7.35 && co2 < 45) || (ph > 7.35 && co2 <= 45)) {
//     if (pao2 == !null) {
//       return "The patient is normal " + oxygenResult;
//     } else {
//       return "respiratory alkalosis";
//     }
//   } else if ((ph <= 7.35 && hco3 < 26) || (ph < 7.35 && hco3 <= 26)) {
//     if (pao2 == !null) {
//       return "The patient is normal " + oxygenResult;
//     } else {
//       return "Metabolic acidosis";
//     }
//   } else if ((ph >= 7.35 && hco3 > 26) || (ph > 7.35 && hco3 >= 26)) {
//     if (pao2 == !null) {
//       return "The patient is normal " + oxygenResult;
//     } else {
//       return "Metabolic alkalosis";
//     }
//   } else {
//     return "Something went wrong" + oxygenResult;
//   }
// }
