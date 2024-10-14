import { useEffect, useRef, useState } from "react";

const MeasuringComp = () => {
  const refContainer = useRef();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (refContainer.current) {
      setDimensions({
        width: refContainer.current.offsetWidth,
        height: refContainer.current.offsetHeight,
      });
    }
  }, []);
  return (
    <div
      className="h-[600px] bg-red-500"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
      ref={refContainer}
    >
      <pre>
        Container:
        <br />
        width: {dimensions.width}
        <br />
        height: {dimensions.height}
      </pre>
    </div>
  );
};

export default MeasuringComp;
