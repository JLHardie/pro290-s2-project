import { useState } from "react"

function EditTicket({SwapScreens}) {
    return (
        <div>
              <div className="popup">
                <div className="popup-content">
                  <h2>Edit Ticket</h2> 
                    <label htmlFor="issue">Issue:</label><br />
                    <input type="text" id="issue" name="issue"/><br />
                    <label htmlFor="notes">Notes:</label><br />
                    <textarea id="notes" name="notes"></textarea><br />
                    <label htmlFor="status">Status:</label><br />
                    <input type="text" id="status" name="status"/><br /><br />
                    <input type="submit" value="Edit" id="submitButton"/>
                    
                  <button  onClick={SwapScreens}>Close</button>
                </div>
              </div>
      </div>
    );
}

function EditCurrentTicket() {
    const [isLoading, setLoading] = useState(false)
  
  }

export default EditTicket;