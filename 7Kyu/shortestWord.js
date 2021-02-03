function findShort(s){
  let word = s.split(" ")
  let short = word[0].length
  for (const w of word){
    if(w.length < short){
      short = w.length
    }
  }
 
  return short
}