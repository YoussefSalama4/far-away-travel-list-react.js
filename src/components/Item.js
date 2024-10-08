export default function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        checked={item.packed}
        onChange={() => onToggleItems(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button
        style={{
          color: "red",
          fontSize: "50px",
          transform: "translateY(0px)",
        }}
        onClick={() => onDeleteItem(item.id)}
      >
        &times;
      </button>
    </li>
  );
}
