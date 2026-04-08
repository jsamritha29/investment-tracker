import { useState, useEffect } from "react";

function InvestmentForm({ saveInvestment, editIndex, investments }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [current, setCurrent] = useState("");

  useEffect(() => {
    if (editIndex !== null) {
      const data = investments[editIndex];
      setName(data.name);
      setAmount(data.amount);
      setCurrent(data.current);
    }
  }, [editIndex, investments]);

  const handleSubmit = (e) => {
    e.preventDefault();

    saveInvestment({
      name,
      amount: Number(amount),
      current: Number(current),
    });

    setName("");
    setAmount("");
    setCurrent("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        placeholder="Investment Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Invested Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="number"
        placeholder="Current Value"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
      />

      <button>
        {editIndex !== null ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default InvestmentForm;
