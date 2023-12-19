 //import AdmissionForm from "./Admissionform";
 import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from "./Homepage";
import Admissionform from "./Admissionform";
import Payment from "./Payment";

//import Joinpage from "./Joinpage";

//import Payment from "./Payment";

function App() {
  return (
    <div className="App">
      <Router>
         <Routes>
             <Route path="/" element={<Homepage/>}/>
             <Route path="/form" element={<Admissionform/>}/>
             <Route path="/payment" element={<Payment/>}/>
         </Routes>
      </Router>
      


    </div>
  );
}

export default App;
