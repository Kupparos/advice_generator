import { FC } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";

const App: FC = () => {
  
  const [advice, setAdvice] = useState<string>('Generate a new piece of advice by clicking the dice')
  
  type GetAdviceResponse = {
    data: string;
  };

  async function getAdvice() {
    axios.get<GetAdviceResponse>('https://api.adviceslip.com/advice')
        .then(response => {
            setAdvice( JSON.stringify(response.data) );
        });
  }

  return (
    <div className="app">
      <div className="container">
        <div className="advice_block">
          <div className="number">Advice #100</div>
          <div className="text">{advice}</div>
          <div className="dice">
            <button onClick={getAdvice}>...</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
