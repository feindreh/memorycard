import roshi from "./MasterRoshi.webp"
import krillin from "./krillin.jpeg"
import goku from "./Goku.webp"


const card = (name,logo) => {
    return {name,logo}
}



const arc0 = () => {
    const arr = [];

    arr.push(card("Master Roshi",roshi))
    arr.push(card("Krillin",krillin))
    arr.push(card("Goku",goku))

    return arr
}

export default arc0