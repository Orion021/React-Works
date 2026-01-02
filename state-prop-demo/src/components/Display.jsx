function Display(props) {
  var type;

  if (props.value % 2 === 0) {
    type = "Even";
  } else {
    type = "Odd";
  }

  return (
    <div>
      <h2>Current Count: {props.value}</h2>
      <h3>Number Type: {type}</h3>
    </div>
  );
}

export default Display;
