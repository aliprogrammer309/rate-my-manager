import "./App.css";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import ProfessorPersonReview from "./components/personReview/ProfessorPersonReview";
import AddCompany from "./components/add/AddCompany";
import AddManager from "./components/add/AddManager";
import SearchCompany from "./components/search/SearchCompany";
import RateCompany from "./components/rateCompany/RateCompany";
import CompanyResult from "./components/rateCompany/CompanyResult";
import RateManager from "./components/rateManager/RateManager";
import ManagerResult from "./components/rateManager/ManagerResult";
import RateCoworker from "./components/rateCoworker/RateCoworker";
import AddCoworker from "./components/add/AddCoworker";
import CoworkerResult from "./components/rateCoworker/CoworkerResult";
import SearchCoworker from "./components/search/SearchCoworker";
import About from "./pages/About/About";
import Advice from "./pages/Advice/Advice";
import Blogs from "./pages/Blogs/Blogs";
import CommunityGuidelines from "./pages/CommunityGuidelines/CommunityGuidlines";
import ContactUs from "./pages/ContactUs/ContactUs";
import Jobs from "./pages/Jobs/Jobs";
import ResumeHelp from "./pages/ResumeHelp/ResumeHelp";
import TopManagers from "./pages/TopManagers/TopManagers";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Copyright from "./pages/copyright/Copyright";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgetPassword from "./pages/Auth/ForgetPassword";


function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searchCompany" element={<SearchCompany />} />
          <Route path="/searchCoworker" element={<SearchCoworker />} />
          <Route
            path="/addCompany"
            element={
              <ProtectedRoute>
                <AddCompany />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addManager"
            element={
              <ProtectedRoute>
                <AddManager />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addCoworker"
            element={
              <ProtectedRoute>
                <AddCoworker />
              </ProtectedRoute>
            }
          />
          <Route
            path="/rateCoworker"
            element={
              <ProtectedRoute>
                <RateCoworker />
              </ProtectedRoute>
            }
          />

          <Route
            path="/rateManager"
            element={
              <ProtectedRoute>
                <RateManager />
              </ProtectedRoute>
            }
          />

          <Route
            path="/rateCompany"
            element={
              <ProtectedRoute>
                <RateCompany />
              </ProtectedRoute>
            }
          />
          <Route path="/managerResult" element={<ManagerResult />} />
          <Route path="/coworkerResult" element={<CoworkerResult />} />
          <Route path="/companyResult" element={<CompanyResult />} />
          <Route path="/about" element={<About />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route
            path="/communityGuidelines"
            element={<CommunityGuidelines />}
          />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/resumeHelp" element={<ResumeHelp />} />
          <Route path="/topManagers" element={<TopManagers />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/copyright" element={<Copyright />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route
            path="/managerPersonReview"
            element={<ProfessorPersonReview />}
          />
        </Routes>
      </UserAuthContextProvider>
      <Footer />
    </div>
  );
}

export default App;
