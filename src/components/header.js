function Header(props){

    const {score,highScore} = props


    return(
        <div id="header">
            <div>Header</div>
            <div>Score:{score}</div>
        </div>
    )
}

export default Header