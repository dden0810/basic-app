import React, { useState } from "react";
import { handleAddItem, handleDeleteItem } from "./utils/listUtils";

function App() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(true);
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };

  const toggleText = () => {
    setShowText(!showText);
  };

  const addItem = () => {
    const updatedItems = handleAddItem(items, inputValue);
    setItems(updatedItems);
    setInputValue(""); // Clear input field
  };

  const deleteItem = (indexToDelete) => {
    const updatedItems = handleDeleteItem(items, indexToDelete);
    setItems(updatedItems);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Welcome to My React App
      </h1>
      <p className="text-lg mb-4">
        This app demonstrates state management, conditional rendering, mapping, and item deletion.
      </p>

      {/* Counter Functionality */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition mb-4"
        onClick={handleClick}
      >
        Click Me
      </button>
      <p className="text-xl mb-8">You clicked the button {count} times.</p>

      {/* Toggle Text Functionality */}
      <button
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition mb-4"
        onClick={toggleText}
      >
        Toggle Message
      </button>
      {showText && (
        <p className="text-lg text-gray-700 mb-8">
          Hello! This is a message you can toggle on and off.
        </p>
      )}

      {/* Input and List Mapping */}
      <div className="w-full max-w-md">
        <input
          type="text"
          className="border border-gray-300 rounded w-full py-2 px-4 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
          placeholder="Enter an item..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition w-full"
          onClick={addItem}
        >
          Add Item
        </button>
        <ul className="mt-4 space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-white p-2 rounded shadow"
            >
              <span className="text-gray-700">{item}</span>
              <button
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700 transition"
                onClick={() => deleteItem(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
