const DateInput = ({ text, name }) => {
  return (
    <>
      <label htmlFor={name}>{text} </label>
      <input id={name} type="date" />
    </>
  );
};

export default DateInput;
