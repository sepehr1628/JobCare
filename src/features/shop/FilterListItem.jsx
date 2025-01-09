function FilterListItem({ inputLabel, name, value }) {
  return (
    <li>
      <input type="checkbox" name={name} id={inputLabel} defaultValue={value} />
      <label htmlFor={inputLabel}>{inputLabel}</label>
    </li>
  );
}

export default FilterListItem;
