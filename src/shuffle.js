function getShuffled(arr){
    //return shuffled arr
    let newArr = [...arr]
    const result = []
    
    while(newArr.length > 0){
        const number = Math.floor(Math.random()*newArr.length)
        result.push(newArr[number])
        newArr = newArr.filter((part)=> part !==newArr[number])
    }

    return result
  }

export default getShuffled


// console.log(getShuffled([0,1,2,3]))

