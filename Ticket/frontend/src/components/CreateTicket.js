import React, { useState } from "react"

function CreateTicket({SwapScreens}) {
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
                  <CreateNewTicketButton SwapScreens={SwapScreens}/> <br />
                
                <button onClick={SwapScreens}>Back</button>
              </div>
            </div>
      </div>
    );
}

function CreateNewTicketButton() {
  const [isLoading, setLoading] = useState(false)


  const CreateTicket = async({SwapScreens}) => {
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