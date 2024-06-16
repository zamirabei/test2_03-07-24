import React, { useState } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../../redux/actions/actions";
import Loader from "../../UI/Loader/Loader";

function MainPage() {
  const dispatch = useDispatch();
  const { preloader } = useSelector((state) => state.postsReducer);
  const regExpName = /^a-zA-Z+$/i;
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const formValue = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(user);
  };

  const addUser = (event) => {
    event.preventDefault();
    if (
      user.name.trim() === "" ||
      user.username.trim() === "" ||
      user.email.trim() === ""
    ) {
      return alert("Please fill all the fields");
    }
    if (regExpName.test(!user.name)) return alert("Name must be only letters");

    dispatch(fetchUserData(user));
  };

  if (preloader) return <Loader />;
  return (
    <Container>
      <Form>
        <Row>
          <Col lg={3}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                placeholder="name"
                name="name"
                onChange={formValue}
              />
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group
              className="mb-3"
              controlId="username"
              onChange={formValue}
            >
              <Form.Control
                type="text"
                placeholder="username"
                name="username"
              />
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="text"
                placeholder="email"
                name="email"
                onChange={formValue}
              />
            </Form.Group>
          </Col>
          <Col lg={3}>
            <Button
              type="submit"
              variant="success"
              className="w-100"
              onClick={addUser}
            >
              register user
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default MainPage;
