const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) =>{
  const result= array.find(x=>{
    if(x.result==="W"){return x.year}
})
if(result===undefined){return undefined}
else{return result.year}
}