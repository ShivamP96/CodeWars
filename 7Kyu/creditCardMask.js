// return masked string
function maskify(cc) {
  let result = ''
  if (cc.length < 4){
    return cc
  } else {
    result = cc.split('')
    let arr = result.map(x => '#')
    arr = arr.slice(0,-4)
    let last4 = result.slice(-4)
    let final = arr.concat(last4)  
    return final.join('') 
    
  }
  
 }