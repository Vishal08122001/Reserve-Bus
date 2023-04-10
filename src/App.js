import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detailfilling from './Pages/Detail_Filling ';
import LandingPage from './Pages/LandingPage';
import AvailableBus from './Pages/AvailableBus';
import TickedBooked from './Pages/TickedBooked';
import MyTicket from './Pages/MyTicket';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/detailfilling" element={<Detailfilling />} />
          <Route path="/Available-buses" element={<AvailableBus />} />
          <Route path="/ticketbooked" element={<TickedBooked />} />
          <Route path='/mytickets' element={<MyTicket />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
