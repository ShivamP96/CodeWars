function alphabetPosition(text) {
  let alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  text =  text.toLowerCase(); 
  let result = []
  for (const letter of text){
    if(alpha.includes(letter)){
      result.push((alpha.indexOf(letter))+1)
    }  
  }
  return result.join(" ")
}