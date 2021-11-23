import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import PaymentPage from "./Pages/PaymentPage";
import TicketPage from "./Pages/TicketPage";
// import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab} from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Footer from './Components/Footer'


library.add(fab, fas)

function App() {
  return <div className="App">
    <Router>
      <Routes>
        <Route path = '/' element = {<Landing/>}></Route>
        <Route path = 'Login' element = {<Login/>}></Route>
        <Route path = 'Dashboard' element = {<Dashboard/>}></Route>
        <Route path = 'Tickets' element = {<TicketPage/>}></Route>
        <Route path = 'Payments' element = {<PaymentPage/>}></Route>
      </Routes>
    </Router>
    {/* <Footer/> */}
  </div>;
}

export default App;
