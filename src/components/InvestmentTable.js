function InvestmentTable({ investments, deleteInvestment, editInvestment }) {
  let totalInvestment = 0;
  let totalCurrent = 0;

  investments.forEach((inv) => {
    totalInvestment += inv.amount;
    totalCurrent += inv.current;
  });

  return (
    <div className="table-container">
      <h2>Investments</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Invested</th>
            <th>Current</th>
            <th>Profit/Loss</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {investments.map((inv, index) => {
            const profit = inv.current - inv.amount;

            return (
              <tr key={index}>
                <td>{inv.name}</td>
                <td>₹ {inv.amount}</td>
                <td>₹ {inv.current}</td>

                <td style={{ color: profit >= 0 ? "green" : "red" }}>
                  ₹ {profit}
                </td>

                <td>
                  <button
                    className="edit-btn"
                    onClick={() => editInvestment(index)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteInvestment(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="summary">
        <h3>Total Investment: ₹ {totalInvestment}</h3>
        <h3>Total Current Value: ₹ {totalCurrent}</h3>
        <h3>
          Total Profit/Loss: ₹ {totalCurrent - totalInvestment}
        </h3>
      </div>
    </div>
  );
}

export default InvestmentTable;
