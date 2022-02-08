

function Header() {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg"
    return (
        <header>
           <img src={logo} style={{width:"170px", height:"190px", paddingLeft:"250px", }}/>
           <p style={{textAlign:"center",height: "25px", paddingTop:"1px", paddingRight:"100px", fontSize:"50px"}}>Things To Do In Senegal</p>
        </header>

    )
}

export default Header