function log(element, index, arr) {
  console.log(`${index}: ${element}`)
}


function iterativeLog(arr) {
  arr.forEach(log)
}

function iterate(callback) {
  var ar= ['duck', 'duck', 'goose']
  ar.forEach(callback)
  return ar
}


function doToArray (arr, callback) {
  arr.forEach(callback)
}
