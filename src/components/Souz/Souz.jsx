import React, { useEffect } from "react";
import { useAccordionButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/PostSlice";

const Souz = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.postSlice.products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div>
      {products.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
          <p>{item.price}</p>
          <p>{item.description}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Souz;
