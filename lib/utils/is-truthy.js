module.exports = is_truthy

function is_truthy(a){
  return  typeof a !== 'undefined' &&
          a !== null &&
          a !== false
}