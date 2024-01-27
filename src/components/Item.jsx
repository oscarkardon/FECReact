import React from "react"

export default function Item({details}) {
    console.log(details)
    return(
        <div className="item">
            <p>{details.contribution_receipt_amount} {details.contributor_name} {details.memo_text}</p>
        </div>
    )
}
