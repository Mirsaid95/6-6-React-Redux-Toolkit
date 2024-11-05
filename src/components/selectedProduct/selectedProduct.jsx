import React from "react";
import { useDispatch } from "react-redux";
import formatter from "../../utils/currenscy-format";
import {
  deletProduct,
  toggleAmount,
} from "../../redux/reducers/productReducer";

export const selectedProduct = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="mb-[20px] flex flex-col justify-between items-center">
      <div className="products">
        <div className="products-items ">
          <div className="img ">
            <img src={props.img} alt="img" />
          </div>
          <h5>{props.title}</h5>
          <p>{formatter(props.price)} sum</p>
        </div>
        <div className="btn">
          <button
            onClick={() =>
              dispatch(toggleAmount({ id: props.id, type: "increment" }))
            }
          >
            +
          </button>
          <span>{props.userCount}</span>

          {props.userCount > 2 ? (
            <button
              onClick={() => dispatch(deletProduct({ id: props.id }))}
            ></button>
          ) : (
            <button
              onClick={() =>
                dispatch(toggleAmount({ id: props.id, type: "decrement" }))
              }
            >
              -
            </button>
          )};
            <h1>{formatter(props.userPrice)} sum</h1>
        </div>
      </div>
    </div>
  );
};
