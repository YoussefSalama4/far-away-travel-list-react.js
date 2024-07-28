export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((el) => el.packed).length;
  const percentage = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numItems === 0
          ? "You have no items start adding some 🚀"
          : percentage === 100
          ? "All set! You are ready to go ✈"
          : `💼 You have ${numItems} items on your list, and you already packed 
          ${packedItems} (${percentage}%)`}
      </em>
    </footer>
  );
}
