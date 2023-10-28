import { useState } from "react";
import UseCheckMobileScreen from "./assets/components/CheckView";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Our First Test</h1>
      <h2>
        <UseCheckMobileScreen />
      </h2>
    </>
  );
};

export default App;
