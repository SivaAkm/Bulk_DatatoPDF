import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from './components/LandingPage';
import UploadTemplate from "./components/UploadTemplate";
import UploadData from "./components/UploadData";
import EmailNotifier from "./components/EmailNotifier";



const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/Bulk_DatatoPDF" element={<LandingPage />} />
      <Route path="/UploadData" element={<UploadData />} />
      <Route path="/UploadTemplate" element={<UploadTemplate />} />
      <Route path="/EmailNotifier" element={<EmailNotifier />} />
    </Routes>
  </Router>
  );
};





export default App;
