function getValues() {
  ph = document.getElementById("ph").value;
  co2 = document.getElementById("co2").value;
  hco3 = document.getElementById("hco3").value;
  pao2 = document.getElementById("pao2").value;
}

function calculateOxygen(pao2) {
  if (pao2 >= 80 && pao2 <= 100) {
    return "With normal oxygenation.";
  } else if (pao2 >= 60 && pao2 <= 79) {
    return "With mild hypoxemia.";
  } else if (pao2 >= 40 && pao2 <= 59) {
    return "With moderate hypoxemia.";
  } else {
    return "With severe hypoxemia.";
  }
}

if (pao2 == 0 || pao2 == null || pao2 == undefined) {
  return pao2 == null;
} else {
  oxygenResult = calculateOxygen(pao2);
}

function calculateValues() {
  if (
    ph >= 7.35 &&
    ph <= 7.45 &&
    co2 >= 35 &&
    co2 <= 45 &&
    hco3 >= 22 &&
    hco3 <= 26
  ) {
    if (pao2 == !null) {
      return "The patient is normal " + oxygenResult;
    } else {
      return "The patient is Normal.";
    }
  } else if ((ph <= 7.35 && co2 > 45) || (ph < 7.35 && co2 >= 45)) {
    if (pao2 == !null) {
      return "The patient is normal " + oxygenResult;
    } else {
      return "Respiratory acidosis";
    }
  } else if ((ph >= 7.35 && co2 < 45) || (ph > 7.35 && co2 <= 45)) {
    if (pao2 == !null) {
      return "The patient is normal " + oxygenResult;
    } else {
      return "respiratory alkalosis";
    }
  } else if ((ph <= 7.35 && hco3 < 26) || (ph < 7.35 && hco3 <= 26)) {
    if (pao2 == !null) {
      return "The patient is normal " + oxygenResult;
    } else {
      return "Metabolic acidosis";
    }
  } else if ((ph >= 7.35 && hco3 > 26) || (ph > 7.35 && hco3 >= 26)) {
    if (pao2 == !null) {
      return "The patient is normal " + oxygenResult;
    } else {
      return "Metabolic alkalosis";
    }
  } else {
    return "Something went wrong";
  }
}
