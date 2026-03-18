import { useState } from "react";

const FeePayment = () => {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [amount, setAmount] = useState(0);

  const handlePayment = async () => {
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const order = await response.json();

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "The Concept Academy",
      description: `Fee Payment - ${course}`,
      order_id: order.id,
      handler: function (response: any) {
        alert("Payment Successful!");
        console.log(response);
      },
      prefill: {
        name: studentName,
      },
      theme: {
        color: "#FF6500",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="bg-card p-8 rounded-xl shadow-lg w-full max-w-md space-y-5">
        <h2 className="text-2xl font-bold text-foreground">
          Pay Course Fees
        </h2>

        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
          className="w-full p-3 rounded-lg border border-border bg-background"
        />

        <input
          type="text"
          placeholder="Course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="w-full p-3 rounded-lg border border-border bg-background"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full p-3 rounded-lg border border-border bg-background"
        />

        <button
          onClick={handlePayment}
          className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default FeePayment;