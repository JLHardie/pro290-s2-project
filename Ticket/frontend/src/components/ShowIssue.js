import React from "react";

function ShowIssue({item}){
    if (!item) {
        item = {
            "issue": "none",
            "status": "none",
            "openDate": "none",
            "notes": "none"
        }
    }
    return (
        <div className="ticketDesc" id="desc1">
            <h1>{item.issue}</h1>
            <h2>{item.status}</h2>
            <h2>{item.openDate}</h2>
            <p>{item.notes}</p>
        </div>
    )
}

export default ShowIssue