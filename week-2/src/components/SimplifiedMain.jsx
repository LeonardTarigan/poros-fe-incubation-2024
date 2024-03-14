import { useState } from "react";

function SimplifiedMain() {
  const [nums, setNums] = useState([1, 2, 3, 4]);

  const handleClick = (index) => {
    const newNums = [...nums];
    newNums[index] += index + 1;
    setNums(newNums);
  };

  return (
    <main>
      {nums.map((num, index) => (
        <div
          key={`box-${index}`}
          onClick={() => handleClick(index)}
          className={`flex-item item-${index + 1}`}
        >
          {num}
        </div>
      ))}
    </main>
  );
}

export default SimplifiedMain;
