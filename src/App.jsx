import MeasuringComp from "./components/MeasuringComp";
import Comp1 from "./components/Comp1";
import CodeiumComp from "./components/CodeiumComp";
import "./App.css";

// see https://medium.com/@stephenbunch/how-to-make-a-scrollable-container-with-dynamic-height-using-flexbox-5914a26ae336
function App() {
  return (
    <div className="my-container">
      <div className="my-section">
        {/* <Comp1></Comp1> */}
        <CodeiumComp></CodeiumComp>
        <div className=" scrollable-content">
          <MeasuringComp></MeasuringComp>
        </div>
      </div>
    </div>
  );
}

export default App;
