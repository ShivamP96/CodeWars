function getSum( a,b )
{
  if( a == b ){
    return a
  }
  
  let start = Math.min(a,b)
  let end = Math.max(a,b)
  let sum = 0;
  
  for (let i = start; i <= end; i ++){
    console.log(i)
    sum = sum + i
    console.log("sum ", sum)
  }
  return sum
}