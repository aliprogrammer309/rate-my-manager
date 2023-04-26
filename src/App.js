import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProfessorPersonReview from "./components/personReview/ProfessorPersonReview";
import AddCompany from "./components/add/AddCompany";
import AddManager from "./components/add/AddManager";
import SearchCompany from "./components/search/SearchCompany";
import RateCompany from "./components/rateCompany/RateCompany";
import CompanyResult from "./components/rateCompany/CompanyResult";
import RateManager from "./components/rateManager/RateManager";
import ManagerResult from "./components/rateManager/ManagerResult";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchCompany" element={<SearchCompany />} />
        <Route path="/addCompany" element={<AddCompany />} />
        <Route path="/addManager" element={<AddManager />} />
        <Route path="/rateManager" element={<RateManager />} />
        <Route path="/rateCompany" element={<RateCompany />} />
        <Route path="/managerResult" element={<ManagerResult />} />
        <Route path="/companyResult" element={<CompanyResult />} />
        <Route
          path="/managerPersonReview"
          element={<ProfessorPersonReview />}
        />
        {/* <Route path='/professorPersonReview' element={<professorPersonReview/>}/> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
