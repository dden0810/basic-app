export const handleAddItem = (items, inputValue) => {
    if (inputValue.trim() !== "") {
      return [...items, inputValue];
    }
    return items;
  };
  
  export const handleDeleteItem = (items, indexToDelete) => {
    return items.filter((_, index) => index !== indexToDelete);
  };
  