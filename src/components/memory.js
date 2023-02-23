import Card from "./card"

function Memory(props){
    const {cards} = props;
    let id = 0;
    return(
        <div id="memory">
            {cards.map((card)=>{
                id++;
                return <Card key={id} card={card}/>
            })}
        </div>
    )
}

export default Memory