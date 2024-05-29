import React, { useEffect, useState } from "react";

const ShowTickets = async () => {
    let result = <></>
    try {
        let data = await fetch("http://localhost:8080/ticketService")
        //data = await JSON.parse(data)
        var count = 0
        for (let i in data) {
            ++count
            result += <>
                <h2>Ticket {count}</h2>
                <h4>{i.issue}</h4>
                <h4>{i.status}</h4>
            </>
        }
    } catch {

    }

    return result
}



export default ShowTickets