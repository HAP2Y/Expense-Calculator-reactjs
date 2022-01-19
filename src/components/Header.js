import React from "react";

export const Header = ({toggle, toggleMode}) => {
  return (
    <div className="header-container">
      <h2>Expense Calculator</h2>
      <div className="icon" onClick={toggleMode}>
        {toggle ? <i class="fas fa-sun"></i> : <i class="fas fa-moon"></i>}
      </div>
    </div>
  );
};
