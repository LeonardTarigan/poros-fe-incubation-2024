import { useEffect, useState } from "react";

function Main() {
  const [num1, setNum1] = useState(1);
  const [num2, setNum2] = useState(2);
  const [num3, setNum3] = useState(3);
  const [num4, setNum4] = useState(4);
  const [numChanges, setNumChanges] = useState(0);

  useEffect(() => {
    setNumChanges((prev) => prev + 1);
    console.log("changed");
  }, [num1, num2, num3, num4]);

  useEffect(() => {
    setNumChanges(0);
  }, []);

  return (
    <main>
      <h2>{numChanges} number changes detected</h2>
      <div
        onClick={() => setNum4(4 + num4)}
        id="box-4"
        className="flex-item item-4"
      >
        {num4}
      </div>
      <div
        onClick={() => setNum3(3 + num3)}
        id="box-3"
        className="flex-item item-3"
      >
        {num3}
      </div>
      <section className="flex-item-row">
        <div
          onClick={() => setNum1(1 + num1)}
          id="box-1"
          className="flex-item item-1"
        >
          {num1}
        </div>
        <div
          onClick={() => setNum2(2 + num2)}
          id="box-2"
          className="flex-item item-2"
        >
          {num2}
        </div>
      </section>
    </main>
  );
}

export default Main;
