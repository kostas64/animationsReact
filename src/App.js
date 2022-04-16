import React, { useState } from "react";
import Transition from "react-transition-group/Transition";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBlock, setIsBlock] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleHandler = () => {
    setIsBlock((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button className="Button" onClick={toggleHandler}>
        Toggle
      </button>
      <br />
      <Transition
        mountOnEnter
        unmountOnExit
        in={showBlock}
        timeout={1000}
      >
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: 100,
              height: 100,
              margin: "auto",
              transition: "opacity 1s ease-out",
              opacity: state === "exiting" ? 0 : 1,
            }}
          />
        )}
      </Transition>

      <Modal show={modalIsOpen} closed={closeModal} />

      {modalIsOpen && <Backdrop show />}
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default App;
