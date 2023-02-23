function Header(props){

    const {score} = props


    return(
        <div id="header">
            <div>Header</div>
            <div>Score:{score}</div>
        </div>
    )
}

export default Header