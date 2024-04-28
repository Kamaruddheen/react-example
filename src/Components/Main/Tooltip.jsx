import React, { useState } from "react";

const Tooltip = ({ children, message }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bg-gray-900 text-white text-sm rounded py-1 px-6 bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-80 w-96">
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
