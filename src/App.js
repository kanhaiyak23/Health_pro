import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CalculatorPage } from './components/calculators/CalculatorPage';
import { ResultPage } from './components/calculators/ResultPage';
import { Header } from './components/Headers/Header';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop/>
    <div>

      <Header />

   
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
