import React, { useEffect, useState } from "react";

function ShowTickets({setItem, setData, data}) {
    const [isLoading, setLoading] = useState(true)


    const GetTickets =  async () => {
        try {
            setLoading(true)
            const response = await fetch('http://localhost:8080/ticketService')
            const body =  await response.json()
            let count = 1
            setItem(body[0])
            const ticketList = body.map(ticket => {
                function showItem() {
                    setItem(ticket)
                }
                return <div className="ticket" key={`ticket${count}`} onClick={showItem}>
                    <h2>Ticket {count++}</h2>
                    <h4>{ticket.issue}</h4>
                    <h4>{ticket.status}</h4>
                </div>
                }
            )
            setData(ticketList)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        GetTickets()
    }, [])

    return ( 
        <>
            {
                isLoading ? 
                (<p>loading...</p>) : 
                (   
                    <>
                        {data}
                    </>
                )
            }
        </>
    )
}

export default ShowTickets