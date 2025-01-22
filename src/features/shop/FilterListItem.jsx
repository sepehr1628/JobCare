function FilterListItem({ inputLabel, name }) {
  return (
    <li>
      <input type="checkbox" name={name} id={inputLabel} value={inputLabel} />
      <label htmlFor={inputLabel}>{inputLabel}</label>
    </li>
  );
}

export default FilterListItem;
