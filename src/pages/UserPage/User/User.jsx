import React, { useState } from "react";
import { Link } from "react-router-dom";
import { asyncFunctionOne } from "../../../reduxjs/actions";
import { useDispatch } from "react-redux";

const User = ({ info }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{info.name}</h1>
      <p>{info.email}</p>
      <Link to={`/user/${info.id}`}>
        <button
          onClick={() => {
            dispatch(asyncFunctionOne(info.id));
          }}
        >
          more info
        </button>
      </Link>
    </div>
  );
};

export default User;
