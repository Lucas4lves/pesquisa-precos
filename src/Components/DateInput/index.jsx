const DateInput = ({ text, name, handleChange }) => {
  return (
    <div className="date-wrapper">
      <label htmlFor={name}>{text} </label>
      <input id={name} type="date" onChange={(e) => handleChange(e)} />
    </div>
  );
};

export default DateInput;
