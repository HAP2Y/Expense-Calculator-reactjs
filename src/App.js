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
  const r = document.querySelector(":root");

  const toggleMode = () => {
    SetToggle(!toggle);
    if(toggle){
      r.style.setProperty("--bodybgcolor", "#333");
      r.style.setProperty("--bgcolor", "black");
      r.style.setProperty("--txtcolor", "#f7f7f7");
    }else{
      r.style.setProperty("--bodybgcolor", "#f7f7f7");
      r.style.setProperty("--bgcolor", "#f7f7f7");
      r.style.setProperty("--txtcolor", "black");
    }
  };

  return (
    <GlobalProvider>
      <Header toggle={toggle} toggleMode={toggleMode} />
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
