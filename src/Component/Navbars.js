import React from "react";
import { Container, Button, Nav, InputGroup, Form } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

function Navbars({ handleShow }) {
  return (
    <header className="p-4">
      <Container>
        <Nav className="d-flex justify-content-between align-items-center">
          <h1>Todo-List</h1>
          <Button onClick={handleShow} variant="primary" className="fs-4 px-4">
            Todo-Add
          </Button>
        </Nav>
        <div
          style={{
            margin: "0 200px",
          }}
          className=""
        >
          <InputGroup size="lg" className="mt-5 mb-3">
            <Form.Control
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              <FaSearch />
            </Button>
          </InputGroup>
        </div>
      </Container>
    </header>
  );
}

export default Navbars;
