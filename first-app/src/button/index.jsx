import { Button } from "antd";
import { useState } from "react"

import "./styles.css";

const MyButton = (props) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter+1);
  }

  return (
    <div>
      <Button onClick={handleClick} shape="round">increment {props.text}</Button>
      <div className="display">{counter}</div>
    </div>
  )
}

export default MyButton;