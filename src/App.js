import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/js/home';
import Login from './components/auth/login'; // Make sure you have a Login component
import ApplicationLanding from './components/pages/js/applicationLanding';
import FormPage from './components/pages/js/form';
import PresentationCheck from './components/pages/js/presentationcheck'
import ReviewResponses from './components/pages/js/ReviewResponses';
import History from './components/pages/js/presentationhistory'
import PresentationShare from './components/pages/js/presentationshare';
import Native_Form from './components/pages/Native-Form/Form';
import { TrackProvider } from './components/pages/Native-Form/Track'; // Import the TrackProvider
import { CompetitionProvider } from './components/pages/Native-Form/Competition';
import { TeamProvider } from './components/pages/Native-Form/Team'; // Import the TrackProvider
import { FinancialDataProvider } from './components/pages/Native-Form/financials'; 
function App() {
  return (
    <Router>
       <TrackProvider> 
       <CompetitionProvider >
        < TeamProvider>
        <FinancialDataProvider>
      <Routes>
      <Route path="/share" element={<PresentationShare />} /> {/* Route for handling shared URL */}
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/applicationLanding" element={<ApplicationLanding />} />
        <Route path="/Pages/presentationcheck" element={<PresentationCheck />} />
        <Route path="/Pages/ReviewResponses" element={<ReviewResponses />} />
        <Route path="/pages/presentationhistory" element={<History />} />
        <Route path="/pages/Nativeform" element={<Native_Form />} />
      </Routes>
      </FinancialDataProvider>
      </TeamProvider>
      </CompetitionProvider>
      </TrackProvider>
    </Router>
  );
}
export default App;