import React from "react"

export default function Item({details}) {
    console.log(details)
    return(
        <div className="item">
            <span>{details.contributor_name}</span> 
            <span>{details.contribution_receipt_amount} </span>
            <span>{details.memo_text}</span>
            <span>{details.contribution_receipt_date}</span>
        </div>
    )
}
