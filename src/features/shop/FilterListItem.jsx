function FilterListItem({ inputLabel }) {
  return (
    <li>
      <input type="checkbox" id={inputLabel} />
      <label htmlFor={inputLabel}>{inputLabel}</label>
    </li>
  );
}

export default FilterListItem;
