function getManchesterLevelEncoding(bits) {
  var result = [];
  for (var i = 0; i < bits.length; i++) {
    let symbol = "|--|--|";
    if (parseInt(bits[i].value) == 1) symbol = "|__|--|";
    if (
      parseInt(bits[i].value) == 1 &&
      i > 0 &&
      parseInt(bits[i - 1].value) == 1
    )
      symbol = "|__|--|";
    if (parseInt(bits[i].value) == 0) symbol = "|--|__|";
    if (
      parseInt(bits[i].value) == 0 &&
      i > 0 &&
      parseInt(bits[i - 1].value) == 0
    )
      symbol = "|--|__|";
    result.push(symbol);
  }
  return result;
}

function getNRZl(bits) {
  var result = [];
  for (let i = 0; i < bits.length; i++) {
    let symbol = "|____|";
    if (parseInt(bits[i].value) === 1) symbol = "|----|";
    result.push(symbol);
  }
  return result;
}

function getNRZm(bits) {
    var result = [];
    var s = 0;
    for (let i = 0; i < bits.length; i++) {
        let symbol = "|----|";
        if (parseInt(bits[i].value) === 1 && s == 0) { symbol = "|____|"; s = 1; }
        else { symbol = "|----|"; s = 0; }
        result.push(symbol);
    }
    return result;
}

function getNRZs(bits) {
    var result = [];
    var s = 0;
    for (let i = 0; i < bits.length; i++) {
        let symbol = "|----|";
        if (parseInt(bits[i].value) === 0 && s == 0) { symbol = "|____|"; s = 1; }
        else { symbol = "|----|"; s = 0; }
        result.push(symbol);
    }
    return result;
}

function getRZ(bits) {
  var result = [];
  for (let i = 0; i < bits.length; i++) {
    let symbol = "|____|";
    if (parseInt(bits[i].value) === 1) symbol = "|--__|";
    result.push(symbol);
  }
  return result;
}

function getBiphase_Manchester(bits) {
  var result = [];
  for (let i = 0; i < bits.length; i++) {
    let symbol = "|--__|";
    if (parseInt(bits[i].value) === 1) symbol = "|__--|";
    result.push(symbol);
  }
  return result;
}

function getBiphase_M(bits) {
  var result = [];
  var s = 0;
  for (let i = 0; i < bits.length; i++) {
      let symbol = "|----|";
      if (parseInt(bits[i].value) === 0 && s == 0) { symbol = "|____|"; s = 1; }
      else if(parseInt(bits[i].value) === 0 && s == 1) { symbol = "|----|"; s = 0; }
      else 
      {
        symbol = "|--__|";
      }
      result.push(symbol);
  }
  return result;
}

function getBiphase_S(bits) {
  var result = [];
  var s = 0;
  for (let i = 0; i < bits.length; i++) {
      let symbol = "|----|";
      if (parseInt(bits[i].value) === 1 && s == 0) { symbol = "|____|"; s = 1; }
      else if(parseInt(bits[i].value) === 1 && s == 1) { symbol = "|----|"; s = 0; }
      else 
      {
        symbol = "|--__|";
      }
      result.push(symbol);
  }
  return result;
}

function getMLB_AMI(bits) {
  var result = [];
  var s = 0;
  for (let i = 0; i < bits.length; i++) {
      let symbol = "|----|";
      if (parseInt(bits[i].value) === 1 && s == 0) { symbol = "|''''|"; s = 1; }
      else if(parseInt(bits[i].value) === 1 && s == 1) { symbol = "|____|"; s = 0; }
      else symbol = "|----|";
      result.push(symbol);
  }
  return result;
}