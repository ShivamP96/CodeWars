function createPhoneNumber(numbers){
  let format = '(xxx) xxx-xxxx'
  let result = ''
  
  for(let i = 0; i< numbers.length; i++){
    format = format.replace('x', numbers[i])
    console.log(format)
  }
  return format
}


function createPhoneNumber(numbers){
  let part1 = ''
  let part2 = ''
  let part3 = ''
  let check = numbers.length
  console.log(check)
  
  if(check){
    return(`(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`)
    
  } else{
    return "Phone Number entered not the right length"
  }
  
}


describe('Basic tests', () => {
  Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
  Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
});