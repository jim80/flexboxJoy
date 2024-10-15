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
      className=" bg-red-500 border-solid border-2 border-black overflow-auto"
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

      <div className="flex flex-col">
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">CONTENT</h1>
        <h1 className="text-3xl">AT</h1>
        <h1 className="text-3xl">LAST!</h1>
      </div>
    </div>
  );
};

export default MeasuringComp;
