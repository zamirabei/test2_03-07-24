import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFunctionOne } from "../../../reduxjs/actions";
import { Link, useParams } from "react-router-dom";

const UsersPage = () => {
  const user = useSelector((state) => state.fetchUsers.user);
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(asyncFunctionOne(id));
  }, [dispatch]);

  return (
    <div>
      <h1>{user.email}</h1>
      <h2>{user.name}</h2>
      <h3>{user.username}</h3>
      <h4>{user.phone}</h4>
      <h4>{user.website}</h4>
      <Link to={"/"}>
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default UsersPage;
