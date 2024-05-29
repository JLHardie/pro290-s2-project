import React, { useState } from "react"

function CreateTicket({setItem, setData, SwapScreens}) {
    return (
        <div>
            <div className="popup">
              <div className="popup-content">
                <h2>Create Ticket</h2>
                
                  <label htmlFor="cID">Customer ID:</label><br />
                  <input type="text" id="cID" name="cID"/><br />
                  <label htmlFor="issue">Issue:</label><br />
                  <input type="text" id="issue" name="issue"/><br />
                  <label htmlFor="notes">Notes:</label><br />
                  <textarea id="notes" name="notes"></textarea><br />
                  <label htmlFor="status">Status:</label><br />
                  <input type="text" id="status" name="status"/><br /><br />
                  <CreateNewTicketButton setItem={setItem} setData={setData} SwapScreens={SwapScreens}/> <br />
                
                <button onClick={SwapScreens}>Back</button>
              </div>
            </div>
      </div>
    );
}

function CreateNewTicketButton({setItem, setData ,SwapScreens}) {
  const [isLoading, setLoading] = useState(false)


  const CreateTicket = async() => {
    try {
      setLoading(true)
      let customerId = document.getElementById('cID').value
      let issue = document.getElementById('issue').value
      let notes = document.getElementById('notes').value
      let status = document.getElementById('status').value
      let ticket = {
        "customerId": customerId,
        "issue": issue,
        "notes": notes,
        "status": status
      }
      console.log(ticket)
      let response = await fetch('http://localhost:8080/ticketService', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ticket)
      })
      if (response === 202) {
        SwapScreens()
        let response = await fetch('http://localhost:8080/ticketService')
        let body = await response.json()
        let count = 1
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
      }
    } catch (error){
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <button onClick={CreateTicket} id='submitButton' disabled={isLoading}>Create</button>
  )
}

export default CreateTicket;