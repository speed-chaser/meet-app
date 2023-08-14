const NumberOfEvents = ({ setCurrentNOE }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
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
