import React from 'react';
import formatter from '../../utils/currenscy-format';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/reducers/productReducer';

export const ProductCard = (props) => { // Destructured props for better readability
  const dispatch = useDispatch();

  return (
    <div>
        <img src={props.img} alt="Product Image" /> {/* Added alt text for accessibility */}
        <h2>{props.title}</h2>
        <h1>{formatter(props.price)} sum</h1>
        <p>{props.brand}</p>  
        <button onClick={() => dispatch(addCard(props))}>Buy</button> {/* Corrected dispatch call to pass object with props */}
    </div>
  );
};
