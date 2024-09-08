import { useEffect, useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
export default function App() {
  const [items, setItems] = useState(function () {
    const storedValue = JSON.parse(localStorage.getItem("addedItems"));
    return storedValue || [];
  });
  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((el) => el.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((el) => (el.id === id ? { ...el, packed: !el.packed } : el))
    );
  }

  useEffect(
    function () {
      console.log(items);
      localStorage.setItem("addedItems", JSON.stringify(items));
    },
    [items]
  );

  function handleClearList() {
    const confirmed = window.confirm("are you sure you want to clear the list");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        onToggleItems={handleToggleItem}
        onDeleteItem={handleDeleteItem}
        onClearList={handleClearList}
        items={items}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}
