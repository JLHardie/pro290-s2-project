import logo from './logo.svg';
import './App.css';

import CartLink from './components/CartLink';
import LoginLink from './components/LoginLink';

function App() {
  return (
    <body>
      <header>
        <nav>
            <ul>
                <li id="list1"><a href="http://localhost:3000/" style={{color: "#f3e3e2"}}>Home</a></li>
                <li id="list2"><a href="http://localhost:3001/" style={{color: "#f3e3e2"}}>Inventory</a></li>
                <li id="list3"><a href="http://localhost:3004/" style={{color: "#f3e3e2"}}>Chat</a></li>
                <li id="list4"><a href="http://localhost:3005/" style={{color: "#f3e3e2"}}>Ticket</a></li>
                <LoginLink />
                <CartLink />
            </ul>
        </nav>
      </header>
      <main>
        <div>
          <h1 id="start">Welcome to TechPro Repair Solutions</h1>
          <p>
          Your One-Stop Shop for All Computer Repair Needs
          At TechPro Repair Solutions, we understand how crucial your computer is to your daily life. 
          Whether you use it for work, study, or entertainment, a malfunctioning device can be a significant 
          disruption. That's why our team of certified technicians is dedicated to providing fast, reliable, 
          and affordable repair services to get you back up and running in no time.
          <br></br>
          <b>Our Services</b><br></br>
          <b>Comprehensive Diagnostics:</b> Not sure what's wrong with your computer? Our thorough diagnostic process will pinpoint the issue quickly and accurately.<br></br>
          <b>Hardware Repair & Upgrades:</b> From replacing broken screens and faulty keyboards to upgrading your RAM and storage, we've got you covered.<br></br>
          <b>Software Troubleshooting:</b> Whether it's a virus, malware, or a software glitch, our experts will clean up your system and ensure it runs smoothly.<br></br>
          <b>Data Recovery:</b> Lost important files? Our data recovery services can retrieve your valuable data from damaged or corrupted drives.<br></br>
          <b>Custom PC Builds:</b> Looking for a high-performance custom-built PC? We’ll design and assemble a machine that meets your specific needs and budget.<br></br>
          <b>Network Setup & Security:</b> From home Wi-Fi setup to network security solutions, we ensure your online experience is fast and safe.<br></br>
          <br></br>
          <b>Address:</b> 123 Main Street, Tech City, TX 78901<br></br>
          <b>Phone:</b> (123) 456-7890
          </p>
        </div>
        
      </main>
    </body>
  );
}

export default App;
