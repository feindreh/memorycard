function Header(props){

    const {score,scoreMax} = props


    return(
        <div id="header">
            <div>Get every image one time</div>
            <div>Score:{score}/{scoreMax}</div>
        </div>
    )
}

export default Header