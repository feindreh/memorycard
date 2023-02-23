function Header(props){

    const {score,scoreMax} = props


    return(
        <div id="header">
            <div>Header</div>
            <div>Score:{score}/{scoreMax}</div>
        </div>
    )
}

export default Header