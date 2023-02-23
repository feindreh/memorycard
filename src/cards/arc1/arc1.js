// import duo from "./duo.jpeg"
import gohan from "./gohan.jpeg"
import goku from "./goku.jpeg"
import piccolo from "./piccolo.webp"
import raditz from "./raditz.webp"


const card = (name,logo) => {
    return {name,logo}
}



const arc1 = () => {
    const arr = [];

    // arr.push(card("Piccolo & Goku",duo))
    arr.push(card("Gohan",gohan))
    arr.push(card("Goku",goku))
    arr.push(card("Piccolo",piccolo))
    arr.push(card("Raditz",raditz))

    return arr
}

export default arc1