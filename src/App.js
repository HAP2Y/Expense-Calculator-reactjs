import React, { useState } from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

function App() {
  const [toggle, SetToggle] = useState(true);

  const toggleMode = () => {
    SetToggle(!toggle);
  };

  return (
    <GlobalProvider>
      <div className="icon" onClick={toggleMode}>
        {toggle ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
      </div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
