import { useMemo, useState } from "react";
import "./App.css";

function App() {
  const [brutto, setBrutto] = useState("0");
  const [wastes, setWastes] = useState("0");

  const netto = useMemo(() => {
    return (+brutto - +wastes).toFixed(2);
  }, [brutto, wastes]);

  const wastesInPercent = useMemo(() => {
    return ((+wastes / +brutto) * 100).toFixed(2);
  }, [brutto, wastes]);

  return (
    <div className="root">
      <div className="field">
        <label htmlFor="brutto" className="label">
          Брутто, г
        </label>
        <input
          id="brutto"
          className="input"
          type="number"
          value={brutto}
          onInput={(event) => setBrutto(event.currentTarget.value)}
        />
      </div>

      <div className="field">
        <label htmlFor="wastes" className="label">
          Отходы, г
        </label>
        <input
          id="wastes"
          className="input"
          type="number"
          value={wastes}
          onInput={(event) => setWastes(event.currentTarget.value)}
        />
      </div>

      <div className="result-list">
        <div className="result">Нетто: {netto} г</div>
        <div className="result">Отходы: {wastesInPercent}%</div>
      </div>
    </div>
  );
}

export default App;
