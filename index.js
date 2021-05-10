const calculateCastles = (ele) => {
  if(event.keyCode === 13) {
    var inputValue = document.getElementById('input').value;
    var comma = ',';
    var stringArr = inputValue.split(comma);
    var castlesCount = calculateNumbersOfCastlesToBuild(stringArr);
    document.getElementById('amount').innerHTML = castlesCount;
  }
}

function calculateNumbersOfCastlesToBuild(stringArr) {
  if (!stringArr || !stringArr.length) return 0
  if (stringArr.length === 1) return 1
  var heights = [];
  stringArr.map((string, i) => {
    heights.push(parseInt(string));
  })
  var castles = 0
  var currentElevation 
  var previousHeight

  heights.forEach(function(height) {
    if(Number.isInteger(height)) {
      var elevation
      if(previousHeight === undefined) {
        castles++
      } else {
        if(height > previousHeight) {
          elevation = true
        } else if (height < previousHeight) {
          elevation = false
        } else {
          elevation = currentElevation
        }
        if(currentElevation !== undefined && currentElevation !== elevation) {
          castles++
        }
        currentElevation = elevation
      }

      previousHeight = height
    }
  })
  return castles;
}
module.exports = calculateNumbersOfCastlesToBuild;
