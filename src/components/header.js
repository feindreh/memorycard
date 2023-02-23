function Header(props){

    const {score,scoreMax} = props


    return(
        <div id="header">
            <div id="score">{score}/{scoreMax}</div>
            <h1>Every Image One Time</h1>
        </div>
    )
}

export default Header