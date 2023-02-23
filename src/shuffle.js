function getShuffled(arr){
    //return shuffled arr
    const len = [...arr]
    const result = []
    
    while(len.length > 0){
        const number = Math.floor(Math.random()*len.length)
        result.push(len[number])
        len.splice(number,1)
    }
  
    return result
  }

  export default getShuffled