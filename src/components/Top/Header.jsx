import React from "react"

export default function Header({changePage}){
    return(
        <header className="header">
            <h1 className="header-title">FEC FOR YOU</h1>
            <nav className="header-nav">
                <button className="header-button" onClick={() => changePage("donors")}>Donors</button>
                <button className="header-button" onClick={() => changePage("candidates")}>Candidates</button>
            </nav>
        </header>
    )
}