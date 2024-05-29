import { useState } from "react"

function CreateTicket({SwapScreens}) {
    return (
        <div>
          {showForm && (
            <div className="popup">
              <div className="popup-content">
                <h2>Create Ticket</h2>
                <form /*onSubmit={function here !!!}*/>
                  <label htmlFor="cID">Customer ID:</label><br />
                  <input type="text" id="cID" name="cID"/><br />
                  <label htmlFor="issue">Issue:</label><br />
                  <input type="text" id="issue" name="issue"/><br />
                  <label htmlFor="notes">Notes:</label><br />
                  <textarea id="notes" name="notes"></textarea><br />
                  <label htmlFor="status">Status:</label><br />
                  <input type="text" id="status" name="status"/><br /><br />
                  <input type="submit" value="Create" id="submitButton"/>
                </form>
                <button onClick={SwapScreens}>Back</button>
              </div>
            </div>
          )}
      </div>
    );
}

function CreateNewTicket() {
  const [isLoading, setLoading] = useState(false)

}

export default CreateTicket;