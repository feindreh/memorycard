function Header(props){

    const {score,scoreMax} = props

    const arr = []
    for(let i = 1; i<= scoreMax; i++){
        if(i <= score){arr.push((<div className = "score full"></div>))}else{
            arr.push((<div className = "score"></div>))
        }
    }


    return(
        <div id="header">
            
            <h1>Every Image One Time</h1>
            <div id="score">{arr}</div>
        </div>
    )
}

export default Header