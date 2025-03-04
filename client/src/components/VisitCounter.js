import { useEffect, useState } from "react";

function VisitCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/visits`)
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch((err) => console.error("Error fetching visit count:", err));
  }, []);

  return <p className="text-lg font-bold">Total Visits: {count}</p>;
}

export default VisitCounter;
