import React, { useContext, useState, useEffect } from "react";
import { Modal, Button, InputGroup, Form } from "react-bootstrap";
import { AddContext } from "../App";

function Madol({ show, handleClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const { users, setUsers } = useContext(AddContext);

  const save = () => {
    if (name.length >= 5 && email.length >= 5) {
      setUsers((e) => [...e, { name: name, email: email, img: image }]);
      handleClose();
      setName("");
      setEmail("");
      setImage("");
    } else {
      alert("sdcasdvasdc");
      setName("");
      setEmail("");
      setImage("");
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Todo-List</Modal.Title>
        </Modal.Header>
        <div className="m-4">
          <Form.Label className="fs-5 m-0 mx-2">Full name</Form.Label>
          <InputGroup className="mb-3" size="lg">
            <Form.Control
              placeholder="Enter your name"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </InputGroup>
          <Form.Label className="fs-5 m-0 mx-2">Email</Form.Label>
          <InputGroup size="lg" className="mb-3">
            <Form.Control
              placeholder="Enter your email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </InputGroup>
          <Form.Label className="fs-5 m-0 mx-2">Image URL</Form.Label>

          <InputGroup size="lg" className="mb-3">
            <Form.Control
              placeholder="Enter your image"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
          </InputGroup>
        </div>

        <Modal.Footer>
          <Button
            className="px-3 fs-5"
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            onClick={() => save()}
            className="px-3 fs-5"
            variant="primary"
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Madol;
