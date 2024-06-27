import React, { useState, useDeferredValue } from "react";

// Create a large array of objects, simulating a large list of items
const largeList = Array.from({ length: 10000 }, (_, index) => ({
  id: index,
  name: `Item: `
}));

function DeferredValueExample() {
  const [text, setText] = useState(""); // State to hold the input text
  const deferredText = useDeferredValue(text); // Get a deferred value of the text state

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here..."
      />
      {/* Render each item in the large list */}
      {largeList.map((item) => {
        return (
          <p key={item.id}>
            {item.name} {deferredText} {/* Display the deferred text value */}
          </p>
        );
      })}
    </div>
  );
}

export default DeferredValueExample;
