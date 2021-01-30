function getCount(str) {
  let vowelsCount = 0;
  let vowelList = 'aeiou';
  for(let i = 0; i < str.length; i++){
    if(vowelList.indexOf(str[i]) !== -1){

    vowelsCount += 1;}
  }
  
  
  return vowelsCount;
}