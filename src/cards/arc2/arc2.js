
import goku from "./goku.webp"
import kaio from "./kaio.webp"
import nappa from "./nappa.webp"
import plant from "./plant.jpeg"
import vegeta from "./vegeta.webp"
import piccolo from "./piccolo.gif"

const card = (name,logo) => {
    return {name,logo}
}



const arc2 = () => {
    const arr = [];

    // arr.push(card("Piccolo & Goku",duo))
    arr.push(card("Kaio",kaio))
    arr.push(card("Goku",goku))
    arr.push(card("Piccolo",piccolo))
    arr.push(card("Nappa",nappa))
    arr.push(card("Over 9000",vegeta))
    arr.push(card("Saibamen",plant))

    return arr
}

export default arc2