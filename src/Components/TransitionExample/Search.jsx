import React, { useState, useTransition } from "react";

// Create an array of 10,000 items for demonstration purposes
const items = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

const Search = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the current search term
  const [filteredItems, setFilteredItems] = useState(items); // State to hold the filtered list of items
  const [isPending, startTransition] = useTransition(); // Hook to manage transitions for non-blocking updates

  // Handler function for updating the search term and filtering items
  const handleSearch = (e) => {
    const value = e.target.value; // Get the input value
    setSearchTerm(value); // Update the search term state

    // Start a transition to update the filtered items without blocking the UI
    startTransition(() => {
      // Filter items based on the search term
      const filtered = items.filter((item) => item.includes(value));
      setFilteredItems(filtered); // Update the filtered items state
    });
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm} // Bind the input value to the searchTerm state
        onChange={handleSearch} // Call handleSearch on input change
        placeholder="Search items..."
      />
      {/* Display loading message if the transition is pending */}
      {isPending && <p>Loading...</p>}{" "}
      <ul>
        {/* Map over the filtered items and render each item as a list element */}
        {filteredItems.map((item) => (
          <li key={item}>{item}</li> // Each item is displayed in a list item
        ))}
      </ul>
    </div>
  );
};

export default Search;
