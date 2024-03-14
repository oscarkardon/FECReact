import React from "react";

export default function ColumnHeader(){
    return (
        <div>
            <span className="item">
                <h3 className="inline-heading">Price</h3>
                <h3 className="inline-heading">Contributor</h3>
                <h3 className="inline-heading">Donation Memo</h3>
            </span>
        </div>
    )
}