import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="bg-black text-white">Ol</div>
      </div>
    </div>
  );
}

export default App;
