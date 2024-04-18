import React from "react";
import { Link } from "react-router-dom";

// Get colors from categories configuration
import { categories } from "../config/routes";

const generateColorMap = () => {
  return Object.values(categories).reduce((acc, category) => {
    const { color } = category;
    acc[color] = {
      border: `border-${color}-500`,
      hoverBorder: `hover:border-${color}-700`,
    };
    return acc;
  }, {});
};

const colorMap = generateColorMap();

function CategoryLink({ to, title, description, color }) {
  const colorClasses = colorMap[color] || colorMap.blue; // fallback to blue

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
