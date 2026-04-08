import { useState } from "react";
import "./App.css";

import InvestmentForm from "./components/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable";
import PortfolioChart from "./components/PortfolioChart";

function App() {
  const [investments, setInvestments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const saveInvestment = (data) => {
    if (editIndex !== null) {
      const updated = [...investments];
      updated[editIndex] = data;
      setInvestments(updated);
      setEditIndex(null);
    } else {
      setInvestments([...investments, data]);
    }
  };

  const deleteInvestment = (index) => {
    const updated = investments.filter((_, i) => i !== index);
    setInvestments(updated);
  };

  const editInvestment = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="container">
      <h1>Investment Portfolio Tracker</h1>

      <InvestmentForm
        saveInvestment={saveInvestment}
        editIndex={editIndex}
        investments={investments}
      />

      <InvestmentTable
        investments={investments}
        deleteInvestment={deleteInvestment}
        editInvestment={editInvestment}
      />

      <PortfolioChart investments={investments} />
    </div>
  );
}

export default App;

