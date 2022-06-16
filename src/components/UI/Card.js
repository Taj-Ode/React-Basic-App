import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;

  return <div className={classes}> {props.children}</div>;

  //The children prop is built in by react and childen is a reserved name
  // the value of children will always be the content between the opening and closing tags of the component
}

export default Card;
