import React, { useState } from 'react';

function TicketForm() {
    const [showForm, setShowForm] = useState(false);
    const [showSecondForm, setShowSecondForm] = useState(false);
    const [formData, setFormData] = useState({ cID: '', issue: '', notes: '', status: '' });
    const [formSecondData, setFormSecondData] = useState({ notes: '', status: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleChangeToo = (e) => {
      const { name, value } = e.target;
      setFormSecondData({ ...formSecondData, [name]: value });
    };

  return (
    <div>
      <header>
      <nav>
          <ul>
              <li id="list1"><a href="http://localhost:3000/" style={{color: "#f3e3e2"}}>Home</a></li>
              <li id="list2"><a href="http://localhost:3001/" style={{color: "#f3e3e2"}}>Inventory</a></li>
              <li id="list3"><a href="http://localhost:3004/" style={{color: "#f3e3e2"}}>Chat</a></li>
              <li id="list4"><a href="http://localhost:3005/" style={{color: "#f3e3e2"}}>Ticket</a></li>
              <li id="list5" style={{float: "right"}}><a href="http://localhost:3006/" style={{color: "#f3e3e2"}}>Profile</a></li>
              <li id="list6" style={{float: "right"}}><a href="http://localhost:3002/" style={{color: "#f3e3e2"}}>Cart</a></li>
          </ul>
      </nav>
    </header>
    <main>
      <div class="split left">
        <button id="create" onClick={() => setShowForm(true)}>Create Ticket</button>
        <br />
          <div class="ticket" id="ticket1">
            <h2>Ticket 1</h2>
            <h4>[insert issue here]</h4>
            <h4>[status]</h4>
          </div>
          <div class="ticket" id="ticket2">
            <h2>Ticket 2</h2>
            <h4>[insert issue here]</h4>
            <h4>[status]</h4>
          </div>
      </div>
      <div class="split right">
        <div class="centered">
          <div class="ticketDesc" id="desc1">
            <h1>[Issue Name]</h1>
            <h2>[status]</h2>
            <h2>[date]</h2>
            <p>Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Cras a ultrices lacus. 
              Sed vel tortor ac ex luctus pretium. 
              Suspendisse bibendum, diam a venenatis 
              rutrum, libero mauris auctor est, id malesuada 
              mi orci vel ipsum. Vivamus quis nisi eleifend, 
              sodales sapien a, ullamcorper nisi. Phasellus id 
              sapien sapien. Maecenas rutrum arcu ac enim dapibus, 
              in gravida diam egestas. Nulla facilisi. Etiam ipsum 
              nunc, accumsan ut orci non, venenatis pharetra nisi. 
              Donec sit amet pharetra odio. Aenean dapibus venenatis 
              massa vitae imperdiet. Curabitur vel eros quis urna 
              consectetur ultricies a at lorem. Aenean non ligula nibh.</p>
          </div>
          <button id="edit" onClick={() => setShowSecondForm(true)}>Edit Ticket</button>
        </div>
      </div>
      {showForm && (
        <div className="popup">
          <div className="popup-content">
            <h2>Create Ticket</h2>
            <form /*onSubmit={function here !!!}*/>
              <label htmlFor="cID">Customer ID:</label><br />
              <input type="text" id="cID" name="cID" value={formData.cID} onChange={handleChange} required /><br />
              <label htmlFor="issue">Issue:</label><br />
              <input type="text" id="issue" name="issue" value={formData.issue} onChange={handleChange} required /><br />
              <label htmlFor="notes">Notes:</label><br />
              <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} required></textarea><br />
              <label htmlFor="status">Status:</label><br />
              <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} required /><br /><br />
              <input type="submit" value="Create" id="submitButton"/>
            </form>
            <button onClick={() => setShowForm(false)}>Close</button>
          </div>
        </div>
      )}

      {showSecondForm && (
          <div className="popup">
            <div className="popup-content">
              <h2>Second Popup</h2>
                <form>              
                  <label htmlFor="issue">Issue:</label><br />
                  <input type="text" id="issue" name="issue" value={formData.issue} onChange={handleChange} required /><br />
                  <label htmlFor="notes">Notes:</label><br />
                  <textarea id="notes" name="notes" value={formSecondData.notes} onChange={handleChangeToo} required></textarea><br />
                  <label htmlFor="status">Status:</label><br />
                  <input type="text" id="status" name="status" value={formSecondData.status} onChange={handleChangeToo} required /><br /><br />
                  <input type="submit" value="Edit" id="submitButton"/>
                </form>
              <button onClick={() => setShowSecondForm(false)}>Close</button>
            </div>
          </div>
      )}
    </main>
  </div>
  );
};

export default TicketForm;