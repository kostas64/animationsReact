import React, { useState } from "react";
import {
  TransitionGroup,
  CSSTransition,
} from "react-transition-group";
import "./List.css";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevState) => {
      return prevState.concat(prevState.length + 1);
    });
  };

  const removeItemHandler = (selIndex) => {
    setItems((prevState) => {
      return prevState.filter(
        (item, index) => index !== selIndex
      );
    });
  };

  const listItems = items.map((item, index) => (
    <CSSTransition
      key={index}
      classNames="fade"
      timeout={300}
    >
      <li
        className="ListItem"
        onClick={() => removeItemHandler(index)}
      >
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <TransitionGroup component="ul" className="List">
        {listItems}
      </TransitionGroup>
    </div>
  );
};

export default List;
