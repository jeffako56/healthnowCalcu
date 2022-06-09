import { useCallback, useEffect, useState } from "react";
import KeyPadComponent from "./KeyPadComponent";
import "./App.css";
import { CalcView } from "./CalcView";

function App() {
  const [view, setView] = useState("0");
  const [clearName, setClearName] = useState("C");

  useEffect(() => {
    if (view.length > 1) {
      setClearName("AC");
    } else {
      setClearName("C");
    }
  });

  const onClick = useCallback(
    (button) => {
      var res = `${view}`;
      if (button === "=") {
        calculate();
      } else if (button === "C") {
        // this.reset();
        setView("0");
      } else if (button === "CE") {
        backSpace();
      } else {
        if (res.includes("error")) {
          setView("0");
          clean();
        }
        if (view === 0 || view === "0") {
          setView(`${button}`);
        } else {
          setView(view + `${button}`);
        }
      }
    },
    [view]
  );

  const handleChange = useCallback((e) => {
    setView((view = e.target.value));
    console.log(view);
  });

  const backSpace = useCallback(() => {
    if (view.length > 1) {
      console.log("backspace");
      console.log(`view: ${view}`);
      var res = view.slice(0, -1);

      if (res.includes("÷")) {
        console.log("true");
        var wow = res.replace("÷", "/");
      }

      console.log(`wow ${wow}`);
      setView(res);
    } else {
      setView("0");
    }
  }, [view]);

  const calculate = useCallback(() => {
    var res = `${view}`;
    if (res.includes("--")) {
      res = res.replace("--", "+");
    }
    if (res.includes("x")) {
      res = res.replace("x", "*");
    }
    if (res.includes("÷")) {
      res = res.replace("÷", "/");
    }
    if (res.includes("error")) {
    }

    try {
      res = eval(res);
      setView(res);
    } catch (e) {
      setView("error");
    }
  });

  const clean = useCallback(() => {
    view = "0";
  }, [view]);

  return (
    <div className="calc">
      <CalcView handleChange={handleChange} view={view} />
      <KeyPadComponent clear={clearName} class="grid-item" onClick={onClick} />
    </div>
  );
}

export default App;
