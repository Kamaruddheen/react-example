import React from "react";
import { Link } from "react-router-dom";

const colorMap = {
  blue: {
    border: "border-blue-500",
    hoverBorder: "hover:border-blue-700",
  },
  purple: {
    border: "border-purple-500",
    hoverBorder: "hover:border-purple-700",
  },
  // Add more colors as needed
};

function CategoryLink({ to, title, description, color }) {
  const colorClasses = colorMap[color] || colorMap.blue; // fallback to blue if color not found

  return (
    <Link
      to={to}
      className={`block p-4 bg-white rounded-lg shadow-md hover:shadow-lg 
        transition-all duration-200 border-l-4 hover:translate-x-1
        ${colorClasses.border} ${colorClasses.hoverBorder}`}
    >
      <h3 className="font-medium text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  );
}

export default CategoryLink;
