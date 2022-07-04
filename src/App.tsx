import { FC } from "react";
import "./App.scss";
import axios from "axios";
import { useState } from "react";
import { roll } from "./utils/RollDice";
import { useRef } from "react";
import { TiMediaPause } from 'react-icons/ti';

const App: FC = () => {
  const [advice, setAdvice] = useState<string>(
    "Generate a new piece of advice by clicking the dice"
  );
  const [id, setId] = useState<string>("-");
  const ref = useRef<HTMLDivElement | null>(null);
  const el = ref.current as HTMLDivElement;

  interface GetAdviceResponse {
    slip: {
      id: string;
      advice: string;
    };
  }

  async function getAdvice() {
    axios
      .get<GetAdviceResponse>("https://api.adviceslip.com/advice")
      .then((response) => {
        setId(response.data.slip.id);
        setAdvice(response.data.slip.advice);
      });
  }

  return (
    <div className="app">
      <div className="container">
        <div className="advice_block">
          <div className="number">ADVICE # {id}</div>
          <div className="text">"{advice}"</div>
          <div className="separate"><TiMediaPause className="separate_icon"/></div>
          <div
            className="dice-container"
            onClick={() => {
              getAdvice();
              roll(el);
            }}
          >
            <div className="dice" ref={ref}>
              <div className="face" data-id="1">
                <div className="point point-middle point-center"></div>
              </div>
              <div className="face" data-id="2">
                <div className="point point-top point-right"></div>
                <div className="point point-bottom point-left"></div>
              </div>
              <div className="face" data-id="6">
                <div className="point point-top point-right"></div>
                <div className="point point-top point-left"></div>
                <div className="point point-middle point-right"></div>
                <div className="point point-middle point-left"></div>
                <div className="point point-bottom point-right"></div>
                <div className="point point-bottom point-left"></div>
              </div>
              <div className="face" data-id="5">
                <div className="point point-top point-right"></div>
                <div className="point point-top point-left"></div>
                <div className="point point-middle point-center"></div>
                <div className="point point-bottom point-right"></div>
                <div className="point point-bottom point-left"></div>
              </div>
              <div className="face" data-id="3">
                <div className="point point-top point-right"></div>
                <div className="point point-middle point-center"></div>
                <div className="point point-bottom point-left"></div>
              </div>
              <div className="face" data-id="4">
                <div className="point point-top point-right"></div>
                <div className="point point-top point-left"></div>
                <div className="point point-bottom point-right"></div>
                <div className="point point-bottom point-left"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
