import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFunctionOne } from "../../reduxjs/actions";
import { useParams } from "react-router-dom";

const UsersPage = () => {
  const user = useSelector((state) => state.fetchUsers.user);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(asyncFunctionOne(user.id));
  }, [dispatch]);

  return <div>{user.email}</div>;
};

export default UsersPage;
