import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../store/PostSlice";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const CreatePostPage = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.PostSlice.count);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment(1))}>+1</button>
      <button onClick={() => dispatch(decrement(1))}>-1</button>
      <button onClick={() => dispatch(increment(10))}>+10</button>
      <button onClick={() => dispatch(decrement(10))}>-10</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <Link to={"/posts"}>
        <Button>to posts pages</Button>
      </Link>
    </div>
  );
};

export default CreatePostPage;
