const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);

    let errorText;
    const parsedValue = parseFloat(value);

    if (
      isNaN(parsedValue) ||
      parsedValue <= 0 ||
      !Number.isInteger(parsedValue)
    ) {
      errorText = "Only positive whole numbers are allowed.";
    } else if (value.length === 0) {
      errorText = "Please enter a value.";
    } else {
      errorText = "";
    }

    setErrorAlert(errorText);
  };

  return (
    <div id="number-of-events">
      <h3 className="noe-header">Number of Events:</h3>
      <input
        type="text"
        defaultValue="32"
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;
