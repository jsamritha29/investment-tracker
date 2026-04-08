import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function PortfolioChart({ investments }) {
  const data = {
    labels: investments.map((i) => i.name),
    datasets: [
      {
        label: "Portfolio",
        data: investments.map((i) => i.current),
        backgroundColor: [
          "#007bff",
          "#28a745",
          "#ffc107",
          "#dc3545",
          "#6f42c1",
        ],
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Portfolio Distribution</h2>
      <Pie data={data} />
    </div>
  );
}

export default PortfolioChart;
