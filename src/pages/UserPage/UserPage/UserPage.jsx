import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncFunctionFetch } from "../../../reduxjs/actions";
import User from "../User/User";

const UserPage = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.fetchUsers.users);

  useEffect(() => {
    dispatch(asyncFunctionFetch(users));
  }, [dispatch]);

  return (
    <div>
      {users && users.map((user) => <User info={user} key={user.id} />)}
    </div>
  );
};

export default UserPage;
