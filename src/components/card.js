function Card(props){

    const {name,logo} = props.card

    return(
        <div className="cardWrap">
            <img className="card" src={logo}></img>
            <div className="description">{name}</div>
        </div>
    )
}

export default Card