function isIsogram(str){
  if (str.length == 0 ){
    return true
  } else {
    let obj = {};
    let array = str.toLowerCase().split("")
    for(let i = 0; i < array.length; i++){
      console.log("obj[array[i]] ",obj[array[i]])
      if (obj[array[i]]){
        console.log("false obj", obj[array[i]])
        return false;
      }
      console.log("obj ", obj)
      obj[array[i]] = true
      
    }
    return true;
  }
}