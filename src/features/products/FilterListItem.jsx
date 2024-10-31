function FilterListItem({ children, name, value, setBrand, brand }) {
  return (
    <li>
      <input
        type="radio"
        onChange={(e) => setBrand(e.target.value)}
        name={name}
        value={value}
        id={value}
        checked={brand}
      />
      <label htmlFor={value}>{children}</label>
    </li>
  );
}

export default FilterListItem;
