import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Modal from "react-bootstrap/Modal";

import "./Navbar.css";
import { signOut } from "firebase/auth";
import { auth } from "../../fire";
import { useState } from "react";

function NavBar({ setUser, setAuthState }) {
  const [show, setShow] = useState(false);
  const [notification, setNotifications] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShowNotifications = () => setNotifications(true);
  const handleCloseNotifications = () => setNotifications(false);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthState("login");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Settings" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <Button variant="primary" onClick={handleShow}>
                  Change password
                </Button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Change password</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Old password</Form.Label>
                        <Form.Control
                          type="Old password"
                          placeholder="Old password"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>New password</Form.Label>
                        <Form.Control
                          type="New password"
                          placeholder="Password"
                        />
                        <Form.Label>Confirm password</Form.Label>
                        <Form.Control
                          type="Confirm password"
                          placeholder="Password"
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                <Button variant="primary" onClick={handleShowNotifications}>
                  Notifications
                </Button>
                <Modal show={notification} onHide={handleCloseNotifications}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={handleCloseNotifications}
                    >
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleCloseNotifications}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" onClick={handleSignOut}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
