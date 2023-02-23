function Card(props){

    const {name,logo} = props.card
    const {cardPick} = props

    return(
        <div className="cardWrap" onClick={()=>{cardPick(name)}}>
            <img className="card" alt="" src={logo}></img>
            <div className="description">{name}</div>
        </div>
    )
}

export default Card