import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import PaymentPage from "./Pages/PaymentPage";
import TicketPage from "./Pages/TicketPage";
// import ReactDOM from 'react-dom'
import Zip from './Pages/Zip'




function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path = '/' element = {<Landing/>}></Route>
        <Route path = 'Login' element = {<Login/>}></Route>
        <Route path = 'Dashboard' element = {<Dashboard/>}></Route>
        <Route path = 'Tickets' element = {<TicketPage/>}></Route>
        <Route path = 'Payments' element = {<PaymentPage/>}></Route>
        <Route path = 'Zip' element = {<Zip/>}></Route>
      </Routes>
    </Router>
    {/* <Footer/> */}
  </div>;
}

export default App;
