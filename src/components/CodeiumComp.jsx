// just for fun, used codeium command to generate this
import { useEffect, useMemo, useState } from "react";
const CodeiumComp = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
    </div>
  );
};

export default CodeiumComp;
