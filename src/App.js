import "./App.css";
import React, { createContext, useState, useEffect } from "react";
import Navbars from "./Component/Navbars";
import { Card, Container, Modal, Button } from "react-bootstrap";
import Madol from "./Utils/Madol";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

export const AddContext = createContext();
function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const delele = (e) => {
    let aa = users.filter((r) => r.name !== e);
    setUsers(aa);
  };

  const edit = (e) => {
    const name = prompt("Атынызды жазыныз?");
    const email = prompt("Emailынызды жазыныз?");
    const editItem = users.map((r) => {
      if (r.name === e.name && name.length > 4 && email.length > 4) {
        r.name = name;
        r.email = email;
      } else {
        r.name = r.name;
        r.email = r.email;
      }
      return r;
    });
    setUsers(editItem);
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => showToast(), expirationDate - currentDate);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return (
    <AddContext.Provider value={{ users, setUsers }}>
      <div className="App mt-5 ">
        <Container>
          <Card className="text-center">
            <Card.Header className="bg-secondary">
              <Navbars handleShow={handleShow} />
            </Card.Header>
            <Card.Body>
              {users.map((e) => {
                return (
                  <Card className="mx-5 m-3 shadow">
                    <Card.Body className="d-flex justify-content-between align-items-center gap-2 p-0">
                      <div className="d-flex justify-content-start align-items-center gap-3 px-4">
                        <img
                          className="p-2 rounded-circle"
                          width={"80px"}
                          height={"80px"}
                          src={
                            e.img === ""
                              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyg-lpIWxto1SS55fn3QBdu3m2PvTeLp_l_QEmBtNBvAOBRskXNxgpYCtaC5OWCuIAxKM&usqp=CAU"
                              : e.img
                          }
                          alt="logo"
                        />
                        <div>
                          <h4 className="m-0 text-start">
                            {e.name[0].toUpperCase() + e.name.slice(1)}
                          </h4>
                          <p className="m-0 text-start">{e.email}</p>
                        </div>  
                      </div>

                      <div className="px-4">
                        <Button
                          className="me-3"
                          variant="primary"
                          onClick={() => {
                            edit(e);
                          }}
                        >
                          <FaEdit />
                        </Button>
                        <Button
                          onClick={() => delele(e.name)}
                          variant="primary"
                        >
                          <AiTwotoneDelete />
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                );
              })}
            </Card.Body>
            {users.length > 0 ? (
              <Button
                style={{ margin: "0 300px" }}
                className="fs-5"
                variant="primary"
                onClick={() => setUsers([])}
              >
                Clear
              </Button>
            ) : null}
            <Card.Body className="text-muted"></Card.Body>
          </Card>
        </Container>
        <Madol handleClose={handleClose} show={show} />
      </div>
    </AddContext.Provider>
  );
}

export default App;
