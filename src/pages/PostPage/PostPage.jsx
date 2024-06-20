import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { getPosts } from "../../store/fetchSlice";
import Loader from "../../components/UI/Loader/Loader";

const PostPage = () => {
  const dispatch = useDispatch();
  const loader = useSelector((state) => state.fetchReducer.loader);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const formValue = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };
  const regName = /^a-z+$/i;
  const regPassword = /^0-9+$/;
  const regEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  const addUser = (e) => {
    const { name, username, email, password } = user;
    e.preventDefault();
    if (name === "" || username === "" || email === "" || password === "") {
      alert("Заполните все поля");
    } else if (
      regName.test(name) &&
      regPassword.test(password) &&
      regEmail.test(email)
    ) {
      dispatch(getPosts(user));
    } else {
      alert("Введите правильно данные");
    }
  };

  if (loader) return <Loader />;
  return (
    <Form onChange={formValue}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="name@example.com"
          name="email"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="User Name" name="username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" />
      </Form.Group>
      <Button onClick={addUser}>отправить</Button>
    </Form>
  );
};

export default PostPage;
